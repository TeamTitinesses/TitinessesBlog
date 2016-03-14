var app = app || {};

app.postViews = (function () {
    function showPosts (selector, data){
        $.get('templates/home.html', function (template) {
            data.forEach(function (post){
                var rendered = Mustache.render(template, post);
                $(selector).html(rendered);
            })
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
