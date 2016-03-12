/**
 * Created by Ivaylo Ivanov on 16-3-12.
 */

//include navigation on site
var navigation = (function() {
	$.get('html/navigation.html', function(template) {
		var rendered = Mustache.render(template);
		$('header').html(rendered);
	})
})();

//include post on site
var home = (function() {
	$.get('html/home.html', function (template) {
		var rendered = Mustache.render(template);
		$('article').html(rendered);
	})
});

//include post on site
var post = (function() {
	$.get('html/post.html', function (template) {
		var rendered = Mustache.render(template);
		$('article').html(rendered);
	})
});

//include post on site
var addPost = (function() {
	$.get('html/addpost.html', function (template) {
		var rendered = Mustache.render(template);
		$('article').html(rendered);
	})
});