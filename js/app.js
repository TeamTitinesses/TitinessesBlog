var app = app || {};
var requester, selector, userModel, postModel, homeViewBag, postViewBag,
	loginViewBag, addPostBag, homeController, postController, userController,
	loginController, addPostController, registerViewBag, registerController,
	contactViewBag, contactController;

//include navigation on site
(function() {
	$.get('templates/navigation.html', function(template) {
		var rendered = Mustache.render(template);
		$('header').html(rendered);
	})
})();

(function () {
    app.router = Sammy(function () {
        requester = app.requester.config('kid_b1HhUaVLJb', '916fc5a992ee453780b58f565e2b50ad');
        selector = '#wrapper';

        userModel = app.userModel.load(requester);
        postModel = app.postModel.load(requester);

        homeViewBag = app.homeViews.load();
        postViewBag = app.postViews.load();
		loginViewBag = app.loginViews.load();
		addPostBag = app.addPostViews.load();
		registerViewBag = app.registerViews.load();
		contactViewBag = app.contactViews.load();

        homeController = app.homeController.load(homeViewBag);
        postController = app.postController.load(postModel, postViewBag);
        userController = app.userController.load(userModel, postViewBag);
		loginController = app.loginController.load(loginViewBag);
		addPostController = app.addPostController.load(addPostBag);
		registerController = app.registerController.load(registerViewBag);
		contactController = app.contactController.load(contactViewBag);

        this.get('#/home', function () {
            userController.login('test', 'test');
            homeController.loadHomePage('article');
            //postController.getAllPosts('article');
        });

        this.get('#/posts', function () {
			if (userController.checkActiveUser()) {
				postController.getAllPosts('article');
			} else {
				this.redirect('#/login');
			}
        });

        this.get('#/addpost', function () {
			if(userController.checkActiveUser()) {
				addPostController.loadAddPostPage('article');
			} else {
				this.redirect('#/login');
			}
        });

        this.get('#/login', function () {
            loginController.loadLoginPage('article');
        });

		this.get('#/auto-login', function () {
			userController.login('test', 'test');
		});

		this.get('#/register', function () {
            //userModel.signUp("ivaylo", 'ivanov', 'ivaylo@abv.bg');
            registerController.loadRegisterPage('article');
        });

        this.get('#/contact', function () {
            contactController.loadContactPage('article');
        });

		this.get('#/logout', function () {
			userController.logout();
		})
    });

    app.router.run('#/home');
})();