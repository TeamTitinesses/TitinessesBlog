var app = app || {};

app.postViews = (function () {
    function showPosts(selector, posts) {
        $.get('templates/posts.html', function (template) {
			var viewData = {
				data: posts
			};

            var rendered = Mustache.render(template, viewData);
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
