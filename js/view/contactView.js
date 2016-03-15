/**
 * Created by Ivaylo Ivanov on 16-3-15.
 */
var app = app || {};

app.contactViews = (function () {
	function showContactPage (selector){
		$.get('templates/contact.html', function (template) {
			var dataView = {
				title: "Contact with as"
			};
			var rendered = Mustache.render(template, dataView);
			$(selector).html(rendered);
		})
	}

	return {
		load: function () {
			return {
				showContactPage : showContactPage
			}
		}
	}
})();