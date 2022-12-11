"use strict";
const $ = selector => document.querySelector(selector);

//this is an event listener that will wait for a click on the 
//button with the id calculate and then will call the function processEntry
document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});


//this function will print the value from the input with the id income
//then will parse int the value and evaluate if it is greter than 0
//if not, it will show a message error
//if yes, it will call the function calculateTax as a parameter
function processEntry()
{
    var entry = document.getElementById("income")
	var income = parseInt(entry.value)
	var tax = document.getElementById("tax")
	if(income<0)
	{
		alert("The income must be greater than zero")
		tax.value = ""
	}
	else  
	{
		calculateTax(income) 
	}
}  

//this function will calculate the income owed by the user, based on the income that its received as a parameter
function calculateTax(income)
{
	//we create the variable tax which will control the element with the id tax
	var tax = document.getElementById("tax")
	
	//if income is less than 518400
	if(income<518400)
	{
		//if income is less than 207350
		if(income<207350)
		{
			//if income is less than 163300
			if(income<163300)
			{
				//if income is less than 85525
				if(income<85525)
				{
					//if income is less than 40125
					if(income<40125)
					{
						//if income is less than 9875
						if(income<9875)
						{
							//we calculate the excess of the income level
							income = income - 0;
							//we add a fixed tax and a variable tax with the income excess by 10%
							//.toFixed shows 2 decimal places
							tax.value = ((0)+(income*.10)).toFixed(2).toString()
						}
						else
						{
							//we calculate the excess of the income level
							income = income - 9875;
							tax.value = ((987.5)+(income*.12)).toFixed(2).toString()
						}
					}	
					else
					{
						//we calculate the excess of the income level
						income = income - 40125;
						tax.value = ((4617.5)+(income*.22)).toFixed(2).toString()
					}
				}	
				else
				{
					//we calculate the excess of the income level
					income = income - 85525;
					tax.value = ((14605.5)+(income*.24)).toFixed(2).toString()
				}
			}	
			else
			{
				//we calculate the excess of the income level
				income = income - 163300;
				tax.value = ((33271.5)+(income*.32)).toFixed(2).toString()
			}
		}	
		else
		{
			//we calculate the excess of the income level
			income = income - 207350;
			tax.value = ((47367.5)+(income*.35)).toFixed(2).toString()
		}
	}
	else
	{
		//we calculate the excess of the income level
		income = income - 518400;
		tax.value = ((156235.0)+(income*.37)).toFixed(2).toString()
	}

}