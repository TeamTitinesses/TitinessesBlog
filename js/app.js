var app = app || {};
var requester, selector, userModel, postModel, homeViewBag, postViewBag,
	loginViewBag, addPostBag, homeController, postController, userController,
	loginController, addPostController, registerViewBag, registerController;

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

        homeController = app.homeController.load(homeViewBag);
        postController = app.postController.load(postModel, postViewBag);
        userController = app.userController.load(userModel, postViewBag);
		loginController = app.loginController.load(loginViewBag);
		addPostController = app.addPostController.load(addPostBag);
		registerController = app.registerController.load(registerViewBag);

        this.get('#/home', function () {
            userController.login('test', 'test');
            //userController.logout();
            homeController.loadHomePage('article');
            postController.getAllPosts('article');
        });

        this.get('#/posts', function () {
            postController.getAllPosts('article');
        });

        this.get('#/addpost', function () {
            //if not entry in blog
            if (sessionStorage.length === 0) {
                this.redirect('#/login');
            } else {
                addPostController.loadAddPostPage('article');
            }
        });

        this.get('#/login', function () {
            loginController.loadLoginPage('article');
        });

        this.get('#/register', function () {
            //userModel.signUp("ivaylo", 'ivanov', 'ivaylo@abv.bg');
            registerController.loadRegisterPage('article');
        })
    });

    app.router.run('#/home');
})();