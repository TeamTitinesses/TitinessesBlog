var app = app || {};

app.homeController = (function(){
    function HomeController(postModel, viewBag){
		this._postModel = postModel;
        this._viewBag = viewBag;
    }

    HomeController.prototype.loadHomePage = function(selector){
		var _this = this;
		this._postModel.getAllPosts()
			.then(function(posts){
				app.allPosts = posts;
				_this._viewBag.showHomePage(selector, posts);
			}).done();

    };

    return {
        load: function(postModel, viewBag){
            return new HomeController(postModel, viewBag);
        }
    }
}());