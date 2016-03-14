var app = app || {};

app.postViews = (function () {
    function showPosts (selector, data){
        $.get('templates/posts.html', function (template) {
            var rendered = Mustache.render(template, data);
            $(selector).html(rendered);
        })
    }

    return {
        load: function () {
            return {
                showPosts: showPosts
            }
        }
    }
})();
