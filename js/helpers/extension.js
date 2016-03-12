var app = app || {};

app.validator = {
    validateString: function (propertyName, string) {
        if (typeof string !== "string") {
            throw new Error(propertyName + " can be only string!");
        }

        if (string === ""){
            throw new Error(propertyName + " cannot be empty string!")
        }

    },
    validateEmail: function (email){
        var pattern = /^[A-Za-z0-9_.-]{2,}@[a-zA-Z-.]+?\.[a-zA-Z]{2,6}$/;
        if(!pattern.test(email)){
            throw new Error("Invalid email please enter valid email")
        }
    }
};