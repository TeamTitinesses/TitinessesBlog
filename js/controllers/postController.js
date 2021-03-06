var app = app || {};

app.postController =(function () {
    function PostController(model,viewBag){
        this._model = model;
        this._viewBag = viewBag;
    }
    
    PostController.prototype.getAllPosts = function (selector) {
        var _this = this;

        this._model.getAllPosts()
            .then(function(posts){
				app.allPosts = posts;
				_this._viewBag.showPosts(selector, posts);
            }).done();
    };

    PostController.prototype.addPost = function (data) {

		//TODO problem
		var post = new app.post(3, data.title.value, data.content.value, data.author.value)
		post.addTags(data.tags.value);

		console.log(post);
        //var _this = this;
		//
        //var postOutputModel ={
        //    title: data.title
        //};
		//
		//
        //this._model.addPost(postOutputModel)
        //    .then(function () {
        //    _this.getAllPosts();
        //});
    };

    return {
        load: function (model, viewBag) {
            return new PostController(model, viewBag);
        }
    };
}());