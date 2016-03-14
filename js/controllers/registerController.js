/**
 * Created by Ivaylo Ivanov on 16-3-14.
 */
var app = app || {};

app.registerController = (function(){
	function RegisterController(viewBag){
		this._viewBag = viewBag;
	}

	RegisterController.prototype.loadRegisterPage = function(selector){
		this._viewBag.showRegisterPage(selector);
	};

	return {
		load: function(viewBag){
			return new RegisterController(viewBag);
		}
	}
}());