var app = app || {};

app.userModel = (function () {
    function UserModel(requester) {
        this.requester = requester;
        this.serviceUrl = this.requester.baseUrl + 'user/' + this.requester.appId;
    }

    UserModel.prototype.register = function (username, password, email) {
        var requestUrl = this.serviceUrl,
            data = {
                username: username,
                password: password,
                email: email
            };

        return this.requester.post(requestUrl, data);
    };

    UserModel.prototype.login = function (username, password) {
        var requestUrl = this.serviceUrl + '/login',
            data = {
                username: username,
                password: password
            };

        return this.requester.post(requestUrl, data);
    };

    UserModel.prototype.logout = function () {
        var requestUrl = this.serviceUrl + '/_logout';
        return this.requester.post(requestUrl, null, true);
    };

    UserModel.prototype.getInfo = function() {
        var requestUrl = this.serviceUrl + '/_me';

        this.requester.get(requestUrl, null, true)
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