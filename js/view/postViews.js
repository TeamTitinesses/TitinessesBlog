var app = app || {};

app.postViews = (function () {
    function showPosts(selector, post) {
        $.get('templates/home.html', function (template) {
            var rendered = Mustache.render(template, post);
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
