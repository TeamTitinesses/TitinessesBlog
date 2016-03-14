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
                //var result = {
                //    posts: []
                //};
                //
                //posts.forEach(function (post) {
                //    result.posts.push(new app.post(post._id, post.title, post.content, post.author));
                //});
                _this._viewBag.showPosts(selector, posts);
            }).done();
    };

    PostController.prototype.addPost = function (data) {
        var _this =  this;

        var postOutputModel ={
            title: data.title
        };

        this._model.addPost(postOutputModel).then(function () {
            _this.getAllPosts();
        })
    };

    return {
        load: function (model, viewBag) {
            return new PostController(model, viewBag);
        }
    };
}());