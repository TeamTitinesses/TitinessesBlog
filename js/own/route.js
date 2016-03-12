/**
 * Created by Ivaylo Ivanov on 16-3-12.
 */
var titinessisBlog = titinessisBlog || {};

(function() {
	titinessisBlog.router = Sammy(function() {
		$('#testing').text('Welcome!');

		this.get('#/home', function() {
			$("#testing").text('Home');
			home();
		});

		this.get('#/post', function() {
			$("#testing").text('Post');
			post();
		});

		this.get('#/addpost', function() {
			$("#testing").text('Post');
			post();
		});

		this.get('#/login', function() {
			this.redirect('#/register');
		});
	});

	titinessisBlog.router.run('#/home');
})();