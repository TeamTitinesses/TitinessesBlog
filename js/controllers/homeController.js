var app = app || {};

app.homeController = (function(){
    function HomeController(postModel, viewBag){
		this._postModel = postModel;
        this._viewBag = viewBag;
    }

    HomeController.prototype.loadHomePage = function(selector){
		console.log(this);
		//this._model.getAllPosts()
		//	.then(function(posts){
		//		_this._viewBag.showHomePage(selector, posts);
		//	}).done();

    };

    return {
        load: function(postModel, viewBag){
            return new HomeController(postModel, viewBag);
        }
    }
}());