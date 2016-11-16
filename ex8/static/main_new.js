$(document).ready(function () {
	$('#submit').click(function(event) {
		if($('#email').val().trim().length === 0 || $('#password').val().trim().length === 0) {
			event.preventDefault();
			$('#error-message').html("Your username or password is empty.");
		}
	});

   	// Hide the reply form until someone clicks 'reply'
	$("#reply").hide(function() {
	})
	
	// Show only one form
	$("#second").hide(function() {
	})


	// On Click SignUp It Will Hide Login Form and Display Registration form
	$("#signup").click(function() {
		$("#first").slideUp("slow", function() {
			$("#second").slideDown("slow");
		});
	});


	// On Click SignIn It Will Hide Registration Form and Display Login Form
	$("#signin").click(function() {
		$("#second").slideUp("slow", function() {
			$("#first").slideDown("slow");
		});
	});


	// Display reply form
	$("#hideme").click(function() {
		$('#reply').show(function() {
	});

	});
});

