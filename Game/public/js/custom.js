$(document).ready(function () {
	$('#submit').click(function(event) {
		if($('#username').val().trim().length === 0 || $('#password').val().trim().length === 0) {
			event.preventDefault();
			$('#error-message').html('Your username or password is empty.')
		}
	})


	// On Click SignUp It Will Hide Login Form and Display Registration form
	$('#signup').click(function() {
		$('#first').slideUp('slow', function() {
			$('#second').slideDown('slow');
		})
	})


	// On Click SignIn It Will Hide Registration Form and Display Login Form
	$('#signin').click(function() {
		$('#second').slideUp('slow', function() {
			$('#first').slideDown('slow');
		})
	})


	// Confirming new passwords match
	$('#pwd3').on('keyup', function() {
		if($(this).val() != $('#pwd2').val()) {
			$('#msg').html('Your passwords do not match!')
		} else $('#msg').html('Your passwords match!')
	})


	// // On Click SignUp It Will Hide Login Form and Display Registration form
	// $('#changepsw').click(function() {
	// 	$('#third').slideUp('slow', function() {
	// 		$('#fourth').slideDown('slow');
	// 	})
	// })


	// // On Click SignIn It Will Hide Registration Form and Display Login Form
	// $('#changemail').click(function() {
	// 	$('#fourth').slideUp('slow', function() {
	// 		$('#third').slideDown('slow');
	// 	})
	// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////
							////////////////// MeM0Bo@rD #4 Quizy plugin //////////////////



	$('#my-memorygame').quizyMemoryGame( {
		itemWidth: 75, itemHeight: 75, itemsMargin:25, colCount:5, animType:'flip', flipAnim:'tb', animSpeed:140, resultIcons:true});
	
	$('#my-memorygame_ra').quizyMemoryGame( {
		itemWidth: 75, itemHeight: 75, itemsMargin:25, colCount:4, animType:'flip', flipAnim:'tb', animSpeed:140, resultIcons:true});

})









