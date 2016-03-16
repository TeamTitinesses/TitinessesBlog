var app = app || {};
var requester, selector, userModel, postModel, homeViewBag, postViewBag,
	loginViewBag, addPostBag, homeController, postController, userController,
	loginController, addPostController, registerViewBag, registerController,
	contactViewBag, contactController, onePostViewBag, postOneController;

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
		onePostViewBag = app.postOneViews.load();

        homeController = app.homeController.load(postModel, homeViewBag);
        postController = app.postController.load(postModel, postViewBag);
        userController = app.userController.load(userModel, postViewBag);
		loginController = app.loginController.load(loginViewBag);
		addPostController = app.addPostController.load(addPostBag);
		registerController = app.registerController.load(registerViewBag);
		contactController = app.contactController.load(contactViewBag);
		postOneController = app.postOneController.load(onePostViewBag);

        this.get('#/home', function () {
			if(userController.checkActiveUser()) {
				homeController.loadHomePage('article');
			} else {
				this.redirect('#/login');
			}
        });

        this.get('#/posts', function () {
			if (userController.checkActiveUser()) {
				postController.getAllPosts('article');
			} else {
				this.redirect('#/login');
			}
        });

		this.get(/\#\/post\/(.*)/, function () {
			if (userController.checkActiveUser()) {
				var _this = this;

				app.allPosts.forEach(function (post) {
					if(post._id === _this.params.splat[0]) {
						console.log(post);
						postOneController.loadOnePostPage('article', post);
					}
				});
				console.log(app.allPosts);
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
			if(userController.checkActiveUser()) {
				this.redirect('#/register');
			} else {
				loginController.loadLoginPage('article');
			}
        });

		this.get('#/auto-login', function () {
			userController.login('test', 'test');
		});

		this.get('#/register', function () {
            //userModel.signUp("ivaylo", 'ivanov', 'ivaylo@abv.bg');
            registerController.loadRegisterPage('article');
        });

        this.get('#/contact', function () {
			if(userController.checkActiveUser()) {
				contactController.loadContactPage('article');
			} else {
				this.redirect('#/login');
			}
        });

		this.get('#/logout', function () {
			userController.logout();
		});

		this.get('#/adding', function () {
			//TODO redirect to post page
			//postController.addPost(this);
		});
    });

    app.router.run('#/home');
})();