var app = app || {};

app.userModel = (function () {
    function UserModel(requester) {
        this.requester = requester;
        this.serviceUrl = this.requester.baseUrl + 'user/' + this.requester.appId;
    }

    UserModel.prototype.signUp = function (username, password, email) {
        var defer = Q.defer();
        var requestUrl = this.serviceUrl,
            data = {
                username: username,
                password: password,
                email: email
            };

        app.requester.makeRequest('POST', requestUrl, data)
            .then(function (success) {
                var result = success;
                sessionStorage['sessionAuth'] = result._kmd.authtoken;
                sessionStorage['userId'] = result._id;
                defer.resolve();
            }, function (error) {
                console.error(error);
                defer.reject();
            }).done();

        return defer.promise;
    };

    UserModel.prototype.login = function (username, password) {
        var defer = Q.defer();
        var requestUtl = this.serviceUrl + '/login',
            data = {
                username: username,
                password: password
            };

        app.requester.makeRequest('POST', requestUtl, data)
            .then(function (success) {
                sessionStorage['sessionAuth'] = success._kmd.authtoken;
                sessionStorage['userId'] = success._id;
                defer.resolve();
            }, function (error) {
                console.error(error);
                defer.reject();
            }).done();

        return defer.promise;
    };

    UserModel.prototype.getInfo = function() {
        var requestUrl = this.serviceUrl + '/_me';

        app.requester.makeRequest('GET', requestUrl, null, true)
            .then(function(success) {
                app.userModel.prototype.activeUser = success;
                console.log(success);
            }, function(error) {
            console.log(error);
        }).done();
    };

    return {
        load: function (requester) {
            return new UserModel(requester);
        }
    }
})();