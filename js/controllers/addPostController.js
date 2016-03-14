/**
 * Created by Ivaylo Ivanov on 16-3-14.
 */
var app = app || {};

app.addPostController = (function(){
	function AddPostController(viewBag){
		this._viewBag = viewBag;
	}

	AddPostController.prototype.loadAddPostPage = function(selector){
		this._viewBag.showAddPostPage(selector);
	};

	return {
		load: function(viewBag){
			return new AddPostController(viewBag);
		}
	}
}());