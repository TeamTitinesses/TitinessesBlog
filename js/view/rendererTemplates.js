/**
 * Created by Ivaylo Ivanov on 16-3-12.
 */

//include navigation on site
var navigation = (function() {
	$.get('view/navigation.html', function(template) {
		var rendered = Mustache.render(template);
		$('header').html(rendered);
	})
})();

//include post on site
var home = (function() {
	$.get('view/home.html', function (template) {
		var dataView = app.postRequester.postAll;
		var rendered = Mustache.render(template, dataView);
		$('article').html(rendered);
	})
});

//include post on site
var post = (function() {
	$.get('view/posts.html', function (template) {
		var dataView = {
			title: "Title on post"
		};
		var rendered = Mustache.render(template, dataView);
		$('article').html(rendered);
	})
});

//include add post form  on site
var addPost = (function() {
	$.get('view/addpost.html', function (template) {
		var dataView = {
			title: "Add new post"
		};
		var rendered = Mustache.render(template, dataView);
		$('article').html(rendered);
	})
});

//include login form on site
var login = (function() {
	$.get('view/login.html', function (template) {
		var dataView = {
			title: "Login"
		};
		var rendered = Mustache.render(template, dataView);
		$('article').html(rendered);
	})
});

//include login form on site
var register = (function() {
	$.get('view/register.html', function (template) {
		var dataView = {
			title: "Register"
		};
		var rendered = Mustache.render(template, dataView);
		$('article').html(rendered);
	})
});