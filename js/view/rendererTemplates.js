/**
 * Created by Ivaylo Ivanov on 16-3-12.
 */

//include navigation on site
var navigation = (function() {
	$.get('templates/navigation.html', function(template) {
		var rendered = Mustache.render(template);
		$('header').html(rendered);
	})
})();

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

//include login form on site
var register = (function() {
	$.get('templates/register.html', function (template) {
		var dataView = {
			title: "Register"
		};
		var rendered = Mustache.render(template, dataView);
		$('article').html(rendered);
	})
});