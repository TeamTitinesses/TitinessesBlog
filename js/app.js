var app = app || {};

(function () {
    app.router = Sammy(function () {
        var requester = app.requester.config('kid_b1HhUaVLJb', '916fc5a992ee453780b58f565e2b50ad');
        var selector = '#wrapper';

        var userModel = app.userModel.load(requester);
        var postModel = app.postModel.load(requester);

        var homeViewBag = app.homeViews.load();
        var postViewBag = app.postViews.load();
		var loginViewBag = app.loginViews.load();

        var homeController = app.homeController.load(homeViewBag);
        var postController = app.postController.load(postModel, postViewBag);
        var userController = app.userController.load(userModel, postViewBag);
		var loginController = app.loginController.load(loginViewBag);

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
                addPost();
            }
        });

        this.get('#/login', function () {
            loginController.loadLoginPage('article');
        });

        this.get('#/register', function () {
            //userModel.signUp("ivaylo", 'ivanov', 'ivaylo@abv.bg');
            register();
        })
    });

    app.router.run('#/home');
})();