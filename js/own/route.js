/**
 * Created by Ivaylo Ivanov on 16-3-12.
 */
var app = app || {};

if (sessionStorage.length === 0) {
	sessionStorage.setItem('user', 'guest');
	sessionStorage.setItem('permission', 'guest');
}

(function() {
	app.router = Sammy(function() {
		app.requester.config('kid_b1HhUaVLJb', '916fc5a992ee453780b58f565e2b50ad');
		var userRequester = new app.userRequester();
		//userRequester.signUp("ivan", 'ivanov', 'ivan@abv.bg');
		userRequester.login('ivan', 'ivanov');
		userRequester.getInfo();
		console.log(userRequester);

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

	app.router.run('#/home');
})();