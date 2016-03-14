var app = app || {};

app.post = (function (){
    function Post (id, title, content, author){
        this._id = id;
        this.setTitle(title);
        this.setContent(content);
        this.setAuthor(author);
        this.comments = [];
        this.tags = [];
    }

    Post.prototype.getId = function () {
        return this._id;
    };

    Post.prototype.getTitle = function (){
        return this.title;
    };

    Post.prototype.setTitle = function (title) {
        validator.validateString(title);
        this.title = title;
    };

    Post.prototype.getContent = function () {
        return this.content;
    };

    Post.prototype.setContent = function (content) {
        validator.validateString(content);
        this.content = content;
    };

    Post.prototype.getOwner = function () {
        return this.owner;
    };

    Post.prototype.setAuthor = function (owner) {

        this.owner = owner;
    };

    Post.prototype.getComments = function () {
        return this.comments;
    };

    Post.prototype.addComment = function (comment){
        this.comments.push(comment);
    };

    Post.prototype.getTags = function () {
        return this.tags;
    };

    Post.prototype.addTags = function (tag) {
        this.tags.push(tag);
    };

    return Post;
})();