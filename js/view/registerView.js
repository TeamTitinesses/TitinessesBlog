/**
 * Created by Ivaylo Ivanov on 16-3-14.
 */
var app = app || {};

app.registerViews = (function () {
	function showRegisterPage (selector){
		$.get('templates/register.html', function (template) {
			var dataView = {
				title: "Register"
			};
			var rendered = Mustache.render(template, dataView);
			$(selector).html(rendered);
		})
	}

	return {
		load: function () {
			return {
				showRegisterPage: showRegisterPage
			}
		}
	}
})();