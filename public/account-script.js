$(document).ready(function(){

	// Initially, the inputs that display the details are disabled
	$(".detes").prop('disabled', true);

	// Save/Cancel Buttons when editing details initailly hidden
	$('#savin').hide();

	// When the Edit Details button is clicked
	$("#edit").click(function(){
		$(".detes").prop('disabled', false);
		$('#savin').show();
		$('#hide-when-edit').hide();
	});

	$('#cancel-edit').click(function(){
		$('.detes').prop('disabled', true);
		$('#savin').hide();
		$('#hide-when-edit').show();
	});

	$('#save-account-details').click(function(){
		$('#success-message').text("Your updates have been saved!");
		setTimeout(function(){
			$(".success-alert").modal('hide');
		}, 3000);
		$('.detes').prop('disabled', true);
		$('#savin').hide();
		$('#hide-when-edit').show();
	});
	
	$('#delete-account-button').click(function(){
		setTimeout(function(){
			$("#delete-account-alert").modal('hide');
		}, 3000);
	});

	$('#save-password').click(function(){
		$('#success-message').text("Your new password has been saved!");
		setTimeout(function(){
			$(".success-alert").modal('hide');
		}, 3000);
	});

});