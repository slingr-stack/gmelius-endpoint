////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.token = {};

endpoint.token.introspection = {};

endpoint.token.revocation = {};

endpoint.me = {};

endpoint.boards = {};

endpoint.boards.columns = {};

endpoint.boards.cards = {};

endpoint.boards.cards.tags = {};

endpoint.sharedfolders = {};

endpoint.sharedfolders.conversations = {};

endpoint.conversations = {};

endpoint.conversations.notes = {};

endpoint.conversations.reply = {};

endpoint.conversations.tags = {};

endpoint.conversations.assignee = {};

endpoint.conversations.status = {};

endpoint.sequences = {};

endpoint.sequences.enroll = {};

endpoint.sequences.disenroll = {};

endpoint.notes = {};

endpoint.tags = {};

endpoint.webhooks = {};

endpoint.events = {};

endpoint.token.introspection.post = function(httpOptions) {
	var url = parse('/token/introspection');
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.token.revocation.post = function(httpOptions) {
	var url = parse('/token/revocation');
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.me.get = function(httpOptions) {
	var url = parse('/me');
    sys.logs.debug('[gmelius] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.boards.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
			url = parse('/auth/boards');
			break;
		case 1:
			url = parse('/auth/boards/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[gmelius] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.boards.post = function(httpOptions) {
	var url = parse('/auth/boards');
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.boards.put = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/boards/:id', [id]);
    sys.logs.debug('[gmelius] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.boards.delete = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/boards/:id', [id]);
    sys.logs.debug('[gmelius] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.boards.columns.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
			url = parse('/auth/boards/:id/columns', [id]);
			break;
		case 1:
			url = parse('/auth/boards/columns/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[gmelius] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.boards.columns.post = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/boards/:id/columns', [id]);
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.boards.columns.patch = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/boards/columns/:id', [id]);
    sys.logs.debug('[gmelius] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.boards.columns.delete = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/boards/columns/:id', [id]);
    sys.logs.debug('[gmelius] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.boards.cards.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
			url = parse('/auth/boards/:id/cards', [id]);
			break;
		case 1:
			url = parse('/auth/boards/cards/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[gmelius] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.boards.cards.patch = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/boards/cards/:id', [id]);
    sys.logs.debug('[gmelius] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.boards.cards.delete = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/boards/cards/:id', [id]);
    sys.logs.debug('[gmelius] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.boards.cards.post = function(httpOptions) {
	var url = parse('/auth/boards/cards');
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.boards.cards.tags.post = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/boards/cards/:id/tags', [id]);
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.boards.cards.tags.delete = function(id, tagId, httpOptions) {
	if (!id || !tagId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,tagId].');
        return;
    }
    var url = parse('/auth/boards/cards/:id/tags/:tagId', [id, tagId]);
    sys.logs.debug('[gmelius] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sharedfolders.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
			url = parse('/auth/sharedfolders');
			break;
		case 1:
			url = parse('/auth/sharedfolders/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[gmelius] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sharedfolders.conversations.get = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/sharedfolders/:id/conversations', [id]);
    sys.logs.debug('[gmelius] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.conversations.get = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/conversations/:id', [id]);
    sys.logs.debug('[gmelius] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.conversations.notes.post = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/conversations/:id/notes', [id]);
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.conversations.reply.post = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/conversations/:id/reply', [id]);
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.conversations.tags.post = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/conversations/:id/tags', [id]);
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.conversations.assignee.put = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/conversations/:id/assignee', [id]);
    sys.logs.debug('[gmelius] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.conversations.status.put = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/conversations/:id/status', [id]);
    sys.logs.debug('[gmelius] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.sequences.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
			url = parse('/auth/sequences');
			break;
		case 1:
			url = parse('/auth/sequences/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[gmelius] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sequences.enroll.post = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/sequences/enroll/:id', [id]);
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sequences.disenroll.delete = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/sequences/disenroll/:id', [id]);
    sys.logs.debug('[gmelius] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.notes.post = function(httpOptions) {
	var url = parse('/auth/notes');
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.notes.put = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/notes/:id', [id]);
    sys.logs.debug('[gmelius] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.notes.delete = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/notes/:id', [id]);
    sys.logs.debug('[gmelius] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.tags.patch = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/tags/:id', [id]);
    sys.logs.debug('[gmelius] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.webhooks.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
			url = parse('/auth/webhooks');
			break;
		case 1:
			url = parse('/auth/webhooks/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[gmelius] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.webhooks.post = function(httpOptions) {
	var url = parse('/auth/webhooks');
    sys.logs.debug('[gmelius] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.events.get = function(httpOptions) {
	var url = parse('/auth/events');
    sys.logs.debug('[gmelius] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.webhooks.delete = function(id, httpOptions) {
	if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/auth/webhooks/:id', [id]);
    sys.logs.debug('[gmelius] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.post = function(url, httpOptions) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.put = function(url, httpOptions) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.patch = function(url, httpOptions) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.delete = function(url, httpOptions) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.head = function(url, httpOptions) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options);
};

endpoint.options = function(url, httpOptions) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options);
};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
  try {
    if (arguments.length > 1) {
      var args = arguments[1], i = 0;
      return str.replace(/(:(?:\w|-)+)/g, () => {
        if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
        return args[i++];
      });
    } else {
      if (str) {
        return str;
      }
      throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
    }
  } catch (err) {
    sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
    throw err;
  }
}