/**
 * Created by Ivaylo Ivanov on 16-3-14.
 */
var app = app || {};

app.loginViews = (function () {
	function showLoginPage (selector){
		$.get('templates/login.html', function (template) {
			var dataView = {
				title: "Login"
			};
			var rendered = Mustache.render(template, dataView);
			$(selector).html(rendered);
		})
	}

	return {
		load: function () {
			return {
				showLoginPage: showLoginPage
			}
		}
	}
})();