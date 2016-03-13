/**
 * Created by Ivaylo Ivanov on 16-3-13.
 */

var app = app || {};

app.postRequester = (function () {
	function PostRequester() {
		this.serviceUrl = app.requester.baseUrl + 'appdata/' + app.requester.appId;
	}

	//get all post
	PostRequester.prototype.getAllPost = function () {
		var defer = Q.defer();
		var requestUrl = this.serviceUrl + '/post';

		app.requester.makeRequest('GET', requestUrl, null, true)
			.then(function (success) {
				PostRequester.prototype.postAll = success;
				defer.resolve();
			}, function (error) {
				console.error(error);
				defer.reject();
			}).done();

		return defer.promise;
	};

	return PostRequester;

})();