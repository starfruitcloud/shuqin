(function ($) {
	'use script';


	// Contact Form Validation Email
	$('#contactForm').on('submit', function (e) {
		e.preventDefault();

		// Get value
		var name = $('#name').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var subject = $('#subject').val();
		var message = $('#message').val();
		var captcha = $('#mathcaptcha').val();

		// Form Validation
		if (name == '') {
			$('#nameStatus').html('Name is required').delay(5000).hide(800);
		}

		if (email == '') {
			$('#emailStatus').html('Email is required').delay(5000).hide(800);
		}

		if (subject == '') {
			$('#subjectStatus').html('Subject is required').delay(5000).hide(800);
		}

		if (message == '') {
			$('#messageStatus').html('Message is required').delay(5000).hide(800);
		}


		if (name == '' || email == '' || subject == '' || message == '') {
			return false;
		}

		$.ajax({
			url: "mail/contact-mail.php",
			type: "POST",
			data: { name: name, email: email, phone: phone, subject: subject, message: message },
			success: function (resp) {
				var j = JSON.parse(resp);
				if (j.status === true) {
					console.log('response success');
					$('.status-message').html('<span class="success-message">Email has been send sucessfully, Thanks!</span>').delay(5000).hide(800);
					$('form')[0].reset();
				} else {
					alert('Error Sending Email');
				}
			},
			error: function (err) {
				alert('error occurred' + err);
			}
		});
	});



	// Contact Form Validation Email
	$('#subscribeForm').on('submit', function (e) {
		e.preventDefault();


		// Get value
		var email = $('#subEmail').val();

		if (email == '') {
			// $('#subscribeEmailStatus').html('Email is required').delay(5000).hide(800); 
			alert('Email Address Required!');
			$('#subscribeForm')[0].reset();
			return false;
		}

		$.ajax({
			url: "mail/newsletter-mail.php",
			type: "POST",
			data: { email: email },
			success: function (resp) {
				var j = JSON.parse(resp);
				if (j.status === true) {
					console.log('response success');
					$('#subStatuseMessage').html('<span class="success-message">Email has been send sucessfully, Thanks!</span>').delay(5000).hide(800);
					$('#subscribeForm')[0].reset();
				} else {
					alert('Error Sending Email');
				}
			},
			error: function (err) {
				alert('error occurred' + err);
			}
		});
	});



}(jQuery));