var app = app || {};

app.userController = (function () {
    function UserController(model, viewBag) {
        var _this = this;
        this._model = model;
        this._viewBag = viewBag;

    }

    UserController.prototype.loadLoginPage = function(selector) {
        this._viewBag.showLoginPage(selector)
    };

    UserController.prototype.register = function (username, password, email) {
        this._model.register(username, password, email)
            .then(function (success) {
                var result = success;
                sessionStorage['sessionAuth'] = result._kmd.authtoken;
                sessionStorage['userId'] = result._id;
            }, function (error) {
                console.error(error);
            }).done();
    };

    UserController.prototype.login = function(username, password) {
        this._model.login(username, password)
            .then(function (success) {
                sessionStorage['sessionAuth'] = success._kmd.authtoken;
                sessionStorage['userId'] = success._id;
            }).done()
    };

    UserController.prototype.logout = function() {
        this._model.logout()
            .then(function() {
                sessionStorage.clear();
            })
    };

    UserController.prototype.checkActiveUser = function () {
        if (sessionStorage.length === 0) {
            return false;
        } else {
            return true;
        }
    };

    return {
        load: function (model, viewBag) {
            return new UserController(model, viewBag)
        }
    }
}());
