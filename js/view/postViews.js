var app = app || {};

app.postViews = (function () {
    function showPosts (selector, data){
        $.get('templates/posts.html', function (template) {
            var dataView = {
                title: "Title on post"
            };
            var rendered = Mustache.render(template, dataView);
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
