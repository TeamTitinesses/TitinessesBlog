var validator = {
    validateString: function (propertyName, title) {
        if (typeof title !== "string") {
            throw new Error(propertyName + " can be only string!");
        }

        if (title == ""){
            throw new Error(propertyName + " cannot be empty string!")
        }
    }


};