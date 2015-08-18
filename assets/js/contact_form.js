var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/MattTavares@TavaresLabs.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            //$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
            // Success message
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
            $('#success > .alert-success').append("<strong>Your message is being sent</strong>");
            $('#success > .alert-success').append('</div>');
            //clear all fields
            $('#contactForm').trigger("reset");
        },
        success: function(data) {
            //$contactForm.find('.alert--loading').hide();
            //$contactForm.append('<div class="alert alert--success">Message sent!</div>');
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
            $('#success > .alert-success').append("<strong>Your message has been sent.");
            $('#success > .alert-success').append('</div>');
            //clear all fields
            $('#contactForm').trigger("reset");
        },
        error: function(err) {
            //$contactForm.find('.alert--loading').hide();
            //$contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
            // Fail message
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
            $('#success > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try Ma.tthew.email!");
            $('#success > .alert-danger').append('</div>');
        }
    });
});