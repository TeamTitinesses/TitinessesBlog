var app = app || {};

app.homeViews = (function () {
    function showHomePage (selector){
        $.get('templates/home.html', function (template, data) {
            var viewData = {
                data: data
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
