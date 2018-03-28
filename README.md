# ContactStorm - The lightning fast way for contacts to poor in.
Vanilla JS Client Side Contact Form Handler

## Prereq.

- Setup [www.emailjs.com], create an account, create a form
- Create an HTML form on your page, with the ID the same as the form name you created on emailjs
- Include the following tags (before the `</head>`):

```html
<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/StatelessSoftware/ContactStorm/master/ContactStorm.js"></script>
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
- Change "contact" to the name of the form created on emailjs

## Events

You can specify a few callbacks for events along the send process: `onSubmit`, `onSuccess`, and `onError`.  `onSubmit` runs as soon as the submission occours, `onSuccess` runs if the submission is successful, and `onError` runs if the submission fails.

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
