$(document).ready(function () {
	$('#submit').click(function(event) {
		if($('#email').val().trim().length === 0 || $('#password').val().trim().length === 0) {
			event.preventDefault();
			$('#error-message').html("Your username or password is empty.");
		}
	});


//CAN I TAKE THIS OUT BECAUSE THIS IS ALSO HAPPENING IN THE APP.JS
	// $("#login").click(function() {
	// 	if ($("#loginemail").val() == '' || $("#loginpassword").val() == '') {
	// 		alert("Please fill all fields...!!!!!!");
	// 	} else if (!($("#loginemail").val()).match(email)) {
	// 		alert("Please enter valid Email...!!!!!!");
	// 	} else {
	// 		alert("You have successfully Logged in...!!!!!!");
	// 		$("form")[0].reset();
	// 	}
	// });

	// $("#register").click(function() {
	// 	if ($("#name").val() == '' || $("#registeremail").val() == '' || $("#registerpassword").val() == ''){
	// 		alert("Please fill all fields...!!!!!!");
	// 	} else if (!($("#registeremail").val()).match(email)) {
	// 		alert("Please enter valid Email...!!!!!!");
	// 	} else {
	// 		alert("You have successfully Sign Up, Now you can login...!!!!!!");
	// 		$("#form")[0].reset();
	// 		$("#second").slideUp("slow", function() {
	// 			$("#first").slideDown("slow");
	// 		});
	// 	}
	// });
	

	// On Click SignUp It Will Hide Login Form and Display Registration Form
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
});