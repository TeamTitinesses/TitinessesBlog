/**
 * Created by Ivaylo Ivanov on 16-3-15.
 */
var app = app || {};

app.contactController = (function(){
	function ContactController(viewBag){
		this._viewBag = viewBag;
	}

	ContactController.prototype.loadContactPage = function(selector){
		this._viewBag.showContactPage(selector);
	};

	return {
		load: function(viewBag){
			return new ContactController(viewBag);
		}
	}
}());