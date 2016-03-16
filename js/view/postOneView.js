/**
 * Created by Ivaylo Ivanov on 16-3-16.
 */
var app = app || {};

app.postOneViews = (function () {
	function showOnePost(selector, post) {
		$.get('templates/post.html', function (template) {
			var viewData = {
				data: post
			};

			var rendered = Mustache.render(template, viewData);
			$(selector).html(rendered);
		})
	}

	return {
		load: function () {
			return {
				showOnePost: showOnePost
			}
		}
	}
})();
