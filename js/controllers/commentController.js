var app = app || {};

app.commentController = (function () {
    function CommentController(model,viewBag){
        this._model = model;
        this._viewBag = viewBag;
    }

    CommentController.prototype.getAllCommentsByPostId = function(data){
        var _this  = this;

        this._model.getAllCommentsByPostId(data.postId)
            .then(function (comments){
            var result  = {
                comments : []
            };

            comments.forEach(function (comment) {
                result.comments.push(new CommentInputModel(comment._id,comment.content,commetns.post._id));
            });

            _this._viewBag.showComments(data.parent,result);
        }).done();
    };

    CommentController.prototype.addComment = function(data){
        var _this = this;
        var commentOutputModel = {
            content : data.content,
            post : {
                _type: 'KiveyRef',
                _id: data.postId,
                _collection: 'post'
            }
        };

        this._model.addComment(commentOutputModel).then(function () {
            _this.getAllCommentsByPostId(data);
        })
    };

    return {
        load: function (model,viewBag,router) {
            return new CommentController(model,viewBag, router);
        }
    }

}());