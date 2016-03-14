var app = app || {};

app.homeViews = (function () {
    function showHomePage (selector, posts){
        $.get('templates/home.html', function (template) {
            var viewData = {
                data: posts
            };

            var rendered = Mustache.render(template, viewData);
            $(selector).html(rendered);
        })
    }

    return {
        load: function () {
            return {
                showHomePage: showHomePage
            }
        }
    }
})();
