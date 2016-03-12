/**
 * Created by Ivaylo Ivanov on 16-3-12.
 */
var titinessisBlog = titinessisBlog || {};
if (sessionStorage.length === 0) {
	sessionStorage.setItem('user', 'guest');
	sessionStorage.setItem('permission', 'guest');
}

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
			//if not entry in blog
			if (sessionStorage.getItem('user') === 'guest' &&
				sessionStorage.getItem('permission') === 'guest') {
				this.redirect('#/login');
			} else {
				$("#testing").text('AddPost');
				addPost();
			}
		});

		this.get('#/login', function() {
			//this.redirect('#/register');
			$("#testing").text('Login');
			login();
		});
	});

	titinessisBlog.router.run('#/home');
})();