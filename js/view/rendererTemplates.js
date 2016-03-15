/**
 * Created by Ivaylo Ivanov on 16-3-12.
 */



//include post on site
var post = (function() {
	$.get('templates/posts.html', function (template) {
		var dataView = {
			title: "Title on post"
		};
		var rendered = Mustache.render(template, dataView);
		$('article').html(rendered);
	})
});