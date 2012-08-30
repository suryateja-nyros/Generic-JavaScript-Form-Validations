// JavaScript Document

//validation function for radiobuttons

function isValidRadioButton(obj,str) 
{
    for (var i = 0; i < obj.length; i++) 
	{
        if (obj[i].checked) 
		{
            return true;
        }
    }
    alert("Please Select Your " + str );
    return false;
}


//validation function for checkboxes

function isValidCheckBox(obj,str) 
{
    for (var i = 0; i < obj.length; i++) 
	{
        if (obj[i].checked) 
		{
            return true;
        }
    }
    alert("Please Select Your " + str );
    return false;
}

//validaton function for select box / combo box

function isSelectBox(obj,str)
{
	if(obj.selectedIndex==0)
	{
		alert("Please Select the " + str );
		return false;
	}
	else
	{
		return true;
	}
	
}

//validation function for phone number

function isValidPhoneNum(obj,str)
{
	var regex_char = /^[-]?\d*\.?\d*$/;
	var regex_num = /^[0-9]+$/; 
	var regex_pattern =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var len=obj.value.length;
	
	if(obj.value.match(regex_num))
	{
		if(obj.value.match(regex_pattern))
		{
			return true;
		}
		else
		{
			alert("Please enter " + str + " in the following pattern 9899899898");
			obj.focus();
			return false;
		}
	}
	else if(len==0)
	{
		alert("Please enter phone number");
		obj.focus();
		return false;
	}
	else
	{
		alert("Invalid number");
		obj.focus();
		return false;
	}
		
}

//Validation functions for textboxes

//Text box with one argument 

//function when Text box is empty

function isEmptyTextbox(obj,str)
{
	var len=obj.value.length;
	if(len==0)
	{
		alert("please enter " + str);
		obj.focus();
		return false;
	}
	return true;
}

//function when Text box is Not specialchars

function isNotSpecialChars(obj)
{
	var regex_alpha= /[a-zA-Z0-9]/ ;
	if(obj.value.match(regex_alpha))
	{
		return true;
	}
	else
	{
		alert("Please enter only alphanumeric");
		obj.focus();
		return false;
	}
	
}

//Text box validation for special chars

function isSpecialChars(obj)
{
	var regex_alpha= /[a-zA-Z0-9]/ ; 
	if(obj.value.match(!regex_alpha))
	{
		return true;
	}
	else
	{
		alert("Please enter only special characters");
		obj.focus();
		return false;
	}
}

//Text box validation for numbers

function isNumber(obj)
{
	var regex_num=/^[0-9]+$/; 
	if(obj.value.match(regex_num))
	{
		return true;
	}
	else
	{
		alert("Please enter only numbers");
		obj.focus();
		return false;
	}
}

//Text box validation for not numbers

function isNotNumber(obj)
{
	var regex_num=/^[0-9]+$/; 
	if(obj.value.match(!regex_num))
	{
		return true;
	}
	else
	{
		alert("Please enter other than numbers");
		obj.focus();
		return false;
	}
}

//Text box validation for Alphabets

function isAlphabets(obj)
{
	var regex_char=/^[A-z]+$/; 
	if(obj.value.match(regex_char))
	{
		return true;
	}
	else
	{
		alert("Please enter only alphabets");
		obj.focus();
		return false;
	}
}

//Text box validation for not Alphabets

function isNotAlphabets(obj)
{
	var regex_char=/^[A-z]+$/; 
	if(obj.value.match(!regex_char))
	{
		return true;
	}
	else
	{
		alert("Please enter other than alphabets");
		obj.focus();
		return false;
	}
}

//Password box

function isPasswordBox(obj,value,str) 
{
	var len=obj.value.length;
	if(len==0)
	{
		alert("Please enter " + str);
		obj.focus();
		return false;
	}
	
	else if(len<value)
	{
		alert( str + " must be minimum of " + value +" characters");
		obj.focus();
		return false;
	}
	
	return true;
}

//Text box with three arguments

function isNotEmptyTextbox(obj,min_value, max_value,str)
{
	var len=obj.value.length;
	
	if(len==0)
	{
		alert("Please enter " +  str);
		obj.focus();
		return false;
	}
	else if(len >=max_value ||len < min_value)
	{
		alert("The length of " + str + " must between " +  min_value  + " and " +  max_value);
		obj.focus();
		return false;
	}
	return true;
}


//Email validation 

function isEmailFormat(obj)
{
	var regex_email=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
	if(obj.value.match(regex_email))
	{
		return true;
	}
	else
	{
		alert("Please enter a valid email");
		obj.focus();
		return false;
	}
}