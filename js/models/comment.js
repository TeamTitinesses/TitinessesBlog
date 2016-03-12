var app = app || {};

app.comment = (function (){
    function Comment (id, name, email, content){
        this._id = id;
        this.setName(name);
        this.setEmail(email);
        this.setContent(content);
    }

    Comment.prototype.getName = function () {
        return this.name;
    };

    Comment.prototype.setName = function (name) {
        validator.validateString("Name", name);
        this.name = name;
    };

    Comment.prototype.getEmail = function (){
        return this.email;
    };

    Comment.prototype.setEmail = function (email) {
        app.validator.validateEmail(email);
        this.email = email;
    };

    Comment.prototype.getContent = function () {
        return this.content;
    };

    Comment.prototype.setContent = function (content) {
        app.validator.validateString("Content", content);
        this.content = content;
    };
    
    return Comment
})();
