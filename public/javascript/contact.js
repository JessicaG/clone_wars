﻿jQuery()
	.ready(function() {
	//variabili globali
	var errorM = jQuery("#errorM")
		.val();
	var successM = jQuery("#successM")
		.val();
	var mailto = jQuery("#mailto")
		.val();
	var name = jQuery("#name");
	var nameText = jQuery(name)
		.val();
	var company = jQuery("#company");
	var companyText = jQuery(company)
		.val();
	var email = jQuery("#email");
	var emailText = jQuery(email)
		.val();
	var message = jQuery("#testo");
	var messageText = jQuery(message)
		.val();
	var jQuerypost_url = jQuery("form#contatti")
		.attr('action');
	var jQuerypost_url = jQuery("form#wholesale_contact_form")
		.attr('action');

	//validazione di campi

	function validateEmail() {
		var a = jQuery("#email")
			.val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		if (filter.test(a)) {
			jQuery("#email")
				.removeClass("errorcontact");
			return true;
		} else {
			jQuery("#email")
				.addClass("errorcontact");
			return false;
		}
	}

	function validateName() {
		if ((name.val()
			.length < 4) || (name.val() == nameText)) {
			name.addClass("errorcontact");
			return false;

		} else {
			name.removeClass("errorcontact");
			return true;
		}
	}

	function validateMessage() {
		if ((message.val()
			.length < 4) || (message.val() == messageText)) {
			message.addClass("errorcontact");
			return false;
		} else {
			message.removeClass("errorcontact");
			return true;
		}
	}

	//qualche controllo e invio effettivo dell'email con ajax
	jQuery("#contatti")
		.submit(function() {
		if (!validateName() | !validateEmail() | !validateMessage()) var error = "true";
		else var error = "false";
		jQuery.ajax({
			type: 'post',
			url: '/wp-content/themes/mercor/FAS/cstm_fncts.php',
			data: 'name=' + name.val() + '&email=' + email.val() + '&message=' + message.val() + '&error=' + error + '&errorM=' + errorM + '&successM=' + successM + '&mailto=' + mailto + '&contact=novo',
			success: function(results) {
				console.log('results: ' + results);
				console.log('error: ' + error);
				if (error == "true") {
					jQuery("#result")
						.fadeIn(500);
					setTimeout(function() {
						jQuery("#result")
							.fadeOut(500);
					}, 4000);
					jQuery("#name")
						.val() = nameText;
					jQuery("#email")
						.val() = nameText;
					jQuery("#message")
						.val() = nameText;
				} else {
					jQuery("#resultsuccess")
						.fadeIn(500);
					setTimeout(function() {
						jQuery("#resultsuccess")
							.fadeOut(500);
					}, 4000);
					jQuery("#name")
						.val('');
					jQuery("#email")
						.val('');
					jQuery("#testo")
						.val('');
				}
			}
		}); // end ajax
		return false;

	});

	jQuery("#wholesale_contact_form")
		.submit(function() {
		if (!validateName() | !validateEmail() | !validateMessage()) var error = "true";
		else var error = "false";
		jQuery.ajax({
			type: 'post',
			url: '/wp-content/themes/mercor/FAS/cstm_fncts.php',
			data: 'name=' + name.val() + '&company=' + company.val() + '&email=' + email.val() + '&message=' + message.val() + '&error=' + error + '&errorM=' + errorM + '&successM=' + successM + '&mailto=' + mailto + '&wholesale=novo',
			success: function(results) {
				if (error == "true") {
					jQuery("#result")
						.fadeIn(500);
					setTimeout(function() {
						jQuery("#result")
							.fadeOut(500);
					}, 4000);
					jQuery("#name")
						.val() = nameText;
					jQuery("#company")
						.val() = nameText;
					jQuery("#email")
						.val() = nameText;
					jQuery("#testo")
						.val() = nameText;
				} else {
					jQuery("#resultsuccess")
						.fadeIn(500);
					setTimeout(function() {
						jQuery("#resultsuccess")
							.fadeOut(500);
					}, 4000);
					jQuery("#name")
						.val('');
					jQuery("#company")
						.val('');
					jQuery("#email")
						.val('');
					jQuery("#testo")
						.val('');
				}
			}
		}); // end ajax
		return false;

	});
});
