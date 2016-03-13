/**
 * Created by Ivaylo Ivanov on 16-3-12.
 */
var app = app || {};

(function() {
	app.router = Sammy(function() {
		app.requester.config('kid_b1HhUaVLJb', '916fc5a992ee453780b58f565e2b50ad');
		var userRequester = new app.userRequester();
		var postRequester = new app.postRequester();

		this.get('#/home', function() {
			postRequester.getAllPost();
			home();
		});

		this.get('#/posts', function() {
			post();
		});

		this.get('#/addpost', function() {
			//if not entry in blog
			if (sessionStorage.length === 0) {
				this.redirect('#/login');
			} else {
				addPost();
			}
		});

		this.get('#/login', function() {
			//this.redirect('#/register');
			userRequester.login('ivaylo', 'ivanov');
			$('#loginForm').submit(function() {
				console.log(this);
			});
			login();
		});

		this.get('#/register', function() {
			//userRequester.signUp("ivaylo", 'ivanov', 'ivaylo@abv.bg');
			register();
		})
	});

	app.router.run('#/home');
})();