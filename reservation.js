"use strict";
$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	//focus to the "arrival date" text box
	$("#arrival_date").focus();
	//event handler for submit event
	$("#reservation_form").submit(function(evt){
		
		var validation = 0;
		if($("#arrival_date").val() == "")
		{
			alert("Please enter the arrival date")
			validation =1;
			evt.preventDefault();
		}
		if($("#nights").val() == "")
		{
			alert("Please enter the nights ")
			validation =1;
			evt.preventDefault();
		}
		if($("#name").val() == "")
		{
			alert("Please enter your name")
			validation =1;
			evt.preventDefault();
		}
		if($("#email").val() == "")
		{
			alert("Please enter your email")
			validation =1;
			evt.preventDefault();
		}
		if($("#phone").val() == "")
		{
			alert("Please enter your phone number")
			validation =1;
			evt.preventDefault();
		}
		if(validation==0)
		{
			var nights = $("#nights").val();
			if($.isNumeric(nights))
			{
				var email = $("#email").val();
				if(!emailPattern.test(email))
				{
					evt.preventDefault();
					alert("wrong email structure");
				}
			}
			else
			{
				alert("nights value is not a number");
				evt.preventDefault();
			}
		}
	});
}); // end ready