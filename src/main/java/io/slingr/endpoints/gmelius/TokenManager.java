package io.slingr.endpoints.gmelius;

import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.datastores.DataStoreResponse;
import io.slingr.endpoints.services.rest.RestClient;
import io.slingr.endpoints.utils.Json;

import javax.ws.rs.core.Form;
import java.util.Base64;

public class TokenManager {

    private static final String GMELIUS_API_TOKEN_URL = "https://api.gmelius.com/public/v2/token";

    public static final String DATA_STORE = "tokens";
    private static final String LAST_TOKEN = "_LAST_TOKEN";
    private static final String ID = "_id";
    private static final String TIMESTAMP = "timestamp";
    private static final String REFRESH_TOKEN = "refreshToken";
    private static final String ACCESS_TOKEN = "accessToken";
    private static final String AUTHORIZATION_CODE = "authorizationCode";

    private DataStore ds;
    private String clientId;
    private String clientSecret;
    private String authorizationCode;
    private String codeVerifier;
    private String redirect_uri;
    private String accessToken;
    private String refreshToken;
    private HttpService httpService;

    TokenManager(HttpService httpService, DataStore ds, String clientId, String clientSecret, String authorizationCode, String codeVerifier, String redirect_uri) {

        this.httpService = httpService;
        this.ds = ds;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.authorizationCode = authorizationCode;
        this.codeVerifier = codeVerifier;
        this.redirect_uri = redirect_uri;

        Form formBody = new Form().param("grant_type", "authorization_code")
                .param("code", this.authorizationCode)
                .param("scope", "offline_access")
                .param("code_verifier", this.codeVerifier)
                .param("redirect_uri", this.redirect_uri);

        Json refreshTokenResponse = RestClient.builder(GMELIUS_API_TOKEN_URL)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .basicAuthenticationHeader(clientId, clientSecret)
                .post(formBody);
        this.refreshToken = refreshTokenResponse.string("refresh_token");
        this.accessToken = refreshTokenResponse.string("access_token");

        this.setLastToken();
        this.setupToken();

    }

    public void setLastToken() {

        Json filter = Json.map();
        filter.set(ACCESS_TOKEN, this.accessToken);
        filter.set(REFRESH_TOKEN, this.refreshToken);

        Json lastToken = this.getLastToken();
        DataStoreResponse dsResp = ds.find(filter);

        if (dsResp != null && dsResp.getItems().size() == 0 || lastToken == null) { // new token was added

            refreshQuickBooksToken();
            Json newToken = Json.map();
            newToken.set(ACCESS_TOKEN, this.accessToken);
            newToken.set(REFRESH_TOKEN, this.refreshToken);
            newToken.set(AUTHORIZATION_CODE, this.authorizationCode);
            newToken.set(TIMESTAMP, System.currentTimeMillis());

            this.ds.save(newToken);

            newToken.set(ID, LAST_TOKEN);
            this.ds.save(newToken);
        } else {
            this.accessToken = lastToken.string(ACCESS_TOKEN);
            this.refreshToken = lastToken.string(REFRESH_TOKEN);
            this.authorizationCode = lastToken.string(AUTHORIZATION_CODE);
        }
    }

    public String getToken() {
        return this.accessToken;
    }

    public void refreshQuickBooksToken() {

        Form formBody = new Form().param("grant_type", "refresh_token").param("refresh_token", this.refreshToken);
        Json refreshTokenResponse = RestClient.builder(GMELIUS_API_TOKEN_URL)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .header("Accept", "application/json")
                .basicAuthenticationHeader(this.clientId, this.clientSecret)
                .post(formBody);

        Json lastToken = this.getLastToken();

        if (refreshTokenResponse.string("refresh_token") != null ) {
            this.refreshToken = refreshTokenResponse.string("refresh_token");
            lastToken.set(REFRESH_TOKEN, this.refreshToken);
        }
        this.accessToken = refreshTokenResponse.string("access_token");

        lastToken.set(ACCESS_TOKEN, this.accessToken);
        lastToken.set(TIMESTAMP, System.currentTimeMillis());
        ds.save(lastToken);

        this.setupToken();
    }

    public void setupToken() {
        httpService.setupBearerAuthenticationHeader(getToken());
        httpService.setupDefaultHeader("Accept", "application/json");
    }

    private Json getLastToken() {
        try {
            return this.ds.findById(LAST_TOKEN);
        } catch (Exception ex) {
            return null;
        }
    }
}
