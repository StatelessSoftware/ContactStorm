function ContactStorm(username, provider, formName) {

    this.username = username;
    this.provider = provider;
    this.formName = formName;

    this.onSubmit = function(cb) {
        this.cbSubmit = cb;

        return this;
    };

    this.onError = function(cb) {
        this.cbError = cb;

        return this;
    };

    this.onSuccess = function(cb) {
        this.cbSuccess = cb;

        return this;
    };

    this.cbSubmit = function() {};
    this.cbError = function(error) {};
    this.cbSuccess = function(obj) {};

    this.submit = function(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        // Call submission handler
        this.cbSubmit();
        
        // Load form inputs
        var cf_name = document.getElementById("name");
        var cf_email = document.getElementById("email");
        var cf_description = document.getElementById("description");
        
        // Check form
        if (cf_name && cf_email && cf_description) {
            // Form is full
            cf_name = cf_name.value;
            cf_email = cf_email.value;
            cf_description = cf_description.value;
    
            // Output results for debug
            var cf_mail = {
                name: cf_name,
                email: cf_email,
                description: cf_description
            };

            emailjs.send(this.provider, this.formName, cf_mail)
                .then(function (response) {
                    this.cbSuccess(response);
                }.bind(this))
                .catch(function(error) {
                    this.cbError(error);
                }.bind(this))

        }
        else {
            throw "Could not find all form fields.";
        }

    }

    this.init = function() {

        try {

            emailjs.init(this.username);
    
            // Initialize contact form
            var contactForm = document.getElementById(this.formName);
    
            if (contactForm) {
                contactForm.addEventListener(
                    "submit",
                    this.submit.bind(this),
                    false
                );
            }
            else {
                throw "Could not find the contact form.";
            }

        }
        catch (ex) {
            this.cbError(ex);
        }

    };
};
