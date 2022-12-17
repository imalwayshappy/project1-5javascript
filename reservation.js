"use strict";
$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	//focus to the "arrival date" text box
	$("#arrival_date").focus();
	//Using the plugging to validate 
	$("#reservation_form").validate({
		//establishing the rules for the posible errors in the form
		rules:{
			arrival_date:{
				required:true
			},
			nights:{
				required:true,
				number:true
			},
			name:{
				required:true
			},
			email:{
				required:true,
				email: true
				
			},
			phone:{
				required:true
			}
		},
		//Establishing the messages for each error
		messages:{
			arrival_date:{
				required:"Arrival date is required"
			},
			nights:{
				required:"Number of Participants is required",
				number:"This file requires only numbers "
			},
			name:{
				required:"Name is required"
			},
			email:{
				required:"Email is required",
				email:"This is not a valid email address"
			},
			phone:{
				required:"Phone number is required"
			}
		}
	});

}); // end ready
