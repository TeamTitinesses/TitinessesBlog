/**
 * Created by Ivaylo Ivanov on 16-3-14.
 */
var app = app || {};

app.loginController = (function(){
	function LoginController(viewBag){
		this._viewBag = viewBag;
	}

	LoginController.prototype.loadLoginPage = function(selector){
		this._viewBag.showLoginPage(selector);
	};

	return {
		load: function(viewBag){
			return new LoginController(viewBag);
		}
	}
}());