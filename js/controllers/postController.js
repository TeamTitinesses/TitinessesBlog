var app = app || {};

app.postController =(function () {
    function PostController(model,viewBag){
        this._model = model;
        this._viewBag = viewBag;
    }
    
    PostController.prototype.getAllPosts = function (selector) {
        var _this =  this;

        this._model.getAllPosts()
            .then(function(posts){
                var result = {
                    posts: []
                };

                posts.forEach(function (posts) {
                    result.posts.push(new PostInputModel(post._id,post.title));
                });
                _this._viewBag.showPost(selector,result);
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