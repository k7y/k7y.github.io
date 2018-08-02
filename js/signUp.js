window.onload = function() {

	var signUp = document.getElementById("signUp");

	var fullname = document.getElementById("fullname");
	var username = document.getElementById("username");
	var email = document.getElementById("email");
	var passowrd = document.getElementById("passowrd");

	signUp.onclick = function() {

		checkIfEmpty(fullname);
		
  	};

};

checkIfEmpty = function(fullname) {

	if (fullname.value == "") {
		changeStyle(fullname)
	}

	if (fullname.value != "") {
		clearErrorStyle(fullname)
	}

};

clearErrorStyle = function(fullname) { 

	parent = fullname.parentElement;


	parent.parentElement.classList.remove("userDetailsError");

	parent.parentElement.classList.add("userDetails");
};


changeStyle = function(fullname) {

	parent = fullname.parentElement;


	parent.parentElement.classList.remove("userDetails");

	parent.parentElement.classList.add("userDetailsError");
};