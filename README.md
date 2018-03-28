# ContactStorm
### The lightning fast way to let leads come pouring in

## Prereq.

- Setup www.emailjs.com, create an account, create a form
- Create an HTML form on your page, with the ID the same as the form name you created on emailjs
- Include the following tags (before the `</head>`):

```html
<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script type="text/javascript" src="https://rawgit.com/StatelessSoftware/ContactStorm/v0.0.2/ContactStorm.js"></script>
```

## Setup (Vanilla JS)

Copy the following script tag after the scripts inserted previously (or put this in a seperate script file):

```html
<script>
    window.addEventListener("load", function(ev) {
        // Initialize mailman
        var mailman = new ContactStorm("myUsername", "gmail", "contact")
            .init();
    });
</script>
```

## Setup (jQuery)

Copy the following script tag after the scripts inserted previously (or put this in a seperate script file):

```html
<script>
    jQuery(document).ready(function() {
        // Initialize mailman
        var mailman = new ContactStorm("myUsername", "gmail", "contact")
            .init();
    });
</script>
```

## Configuration

You will need to change the following

- Change "myUsername" to your username found on www.emailjs.com
- Change "gmail" the email provider found on www.emailjs.com (or leave it if you use gmail)
- Change "contact" to the name of the form created on www.emailjs.com

## Events

You can specify a few callbacks for events along the send process.

- `onSubmit` - Runs as soon as the submission occours
- `onSuccess` - Runs if the submission is successful
- `onError` - Runs if the submission fails.

```js

...

    // Initialize mailman
    var mailman = new ContactStorm("myUsername", "gmail", "contact")
        .onSubmit(function() {
            console.log("Submitting...");
        })
        .onSuccess(function(response) {
            console.log("Success!", response);
        })
        .onError(function(error) {
            console.log("Error!", error);
        })
        .init();

...

```
