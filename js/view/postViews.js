var app = app || {};

app.postViews = (function () {
    function showPosts(selector, posts) {
        $.get('templates/home.html', function (template) {
			var viewData = {
				data: posts
			};
			//posts.forEach(function(el) {
			//	if(typeof el.content === 'object') {
			//		console.log(el);
			//	}
			//});

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
