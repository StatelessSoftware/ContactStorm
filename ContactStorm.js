function ContactStorm(username, provider, formName) {

    this.username = username;
    this.provider = provider;
    this.formName = formName;
    
    this._form = false;

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

        let payload = {};
        
        // Load form inputs
        formElements.forEach(function(element) {
            let key = element.name || element.id;
            payload[key] = element.value;
        }.bind(this));

        emailjs.send(this.provider, this.formName, payload)
            .then(function (response) {
                this.cbSuccess(response);
            }.bind(this))
            .catch(function(error) {
                this.cbError(error);
            }.bind(this))

    }

    this.init = function() {

        try {

            emailjs.init(this.username);
    
            // Initialize contact form
            this._form = document.getElementById(this.formName);
    
            if (this._form) {
                this._form.addEventListener(
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
