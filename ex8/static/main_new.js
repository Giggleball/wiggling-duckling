$(document).ready(function () {
	$('#submit').click(function(event) {
		if($('#email').val().trim().length === 0 || $('#password').val().trim().length === 0) {
			event.preventDefault();
			$('#error-message').html('Your username or password is empty.')
		}
	})

 //   	Hide the reply form until someone clicks 'reply'
	// $('.reply').hide(function() {
	// 	$('.hideme').click(function(){
 //   			$('.reply').show();
	// 	})
	// })
	
	// Show only one form
	$('#second').hide(function() {
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

	// $("#myB").onclick = function () {
 //        location.href = 'http://localhost:8000/index'
 //    };


    // Input form
    let name = document.forms['vform']['name'].value
    let email = document.form['vform']['email'].value
    let password = document.form['vform']['password'].value


    // Error display form
    let name_error = document.getElementById('name_error')
    let email_error = document.getElementById('email_error')
    let password_error = document.getElementById('password_error')


    // Setting event listeners
    name.addEventLister('blur', nameVerify, true)
    email.addEventLister('blur', emailVerify, true)
    password.addEventLister('blur', passwordVerify, true)


    // Validation function
    function Validate () {
    	if ( name.value == '' ) {
    	 	name.style.border = '1px solid red'
    	 	name_error.textContent = 'Name is required'
    	 	name.focus()
    	 	return false
    	} 

    	if ( email.value == '' ) {
    		email.style.border = '1px solid red'
    		email_error.textContent = 'Email is required'
    		email.focus()
    		return false
    	}

    	if ( password.value == '' ) {
    		password.style.border = '1px solid red'
    		password_error.textContent = 'Password is required'
    		password.focus()
    		return false
    	}
    }


    // Event handler 
    function nameVerify () {
    	if (name_value != '' ) {
    		name.style.border = '1px solid #5E6E66'
    		name_error.innerHTML = ''
    		return true
    	}
    
    	if (email_value != '' ) {
    		email.style.border = '1px solid #5E6E66'
    		email_error.innerHTML = ''
    		return true
    	}

    	if (password_value != '' ) {
    		 password.style.border = '1px solid #5E6E66'
    		password_error.innerHTML = ''
    		return true
    	}
    }


})





















