/**
 * Created by Ivaylo Ivanov on 16-3-14.
 */
var app = app || {};

app.addPostViews = (function () {
	function showAddPostPage (selector){
		$.get('templates/addpost.html', function (template) {
			var dataView = {
				title: "Add new post"
			};
			var rendered = Mustache.render(template, dataView);
			$(selector).html(rendered);
		})
	}

	return {
		load: function () {
			return {
				showAddPostPage: showAddPostPage
			}
		}
	}
})();