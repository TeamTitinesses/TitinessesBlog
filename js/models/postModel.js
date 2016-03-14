var app = app || {};

app.postModel = (function () {
	function PostModel(requester) {
		this.requester = requester;
		this.serviceUrl = this.requester.baseUrl + 'appdata/' + this.requester.appId;
	}

	//get all post
	PostModel.prototype.getAllPost = function () {
		var requestUrl = this.serviceUrl + '/post';
		return this.requester.makeRequest('GET', requestUrl, null, true);
	};

	return {
		load: function (requester) {
			return new PostModel(requester);
		}
	}
})();