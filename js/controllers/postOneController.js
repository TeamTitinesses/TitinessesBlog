/**
 * Created by Ivaylo Ivanov on 16-3-16.
 */
var app = app || {};

app.postOneController = (function(){
	function PostOneController(viewBag){
		this._viewBag = viewBag;
	}

	PostOneController.prototype.loadOnePostPage = function(selector, post){
		this._viewBag.showOnePost(selector, post);
	};

	return {
		load: function(viewBag){
			return new PostOneController(viewBag);
		}
	}
}());