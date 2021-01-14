var form = document.getElementById('form');
var username = document.getElementById('firstname');
var username = document.getElementById('lastname');
var email = document.getElementById('email');


form.addEventListener('submit', (e) => {
	
	e.preventDefault();
	
	checkInput();
})

function checkInput(){
	
	// . trim() for removing any white space inbetween words
	var firstnameValue = firstname.value.trim();
	var lastnameValue = lastname.value.trim();
	var emailValue = email.value.trim();
	
	
	if(firstnameValue === ''){
		
		setErrorfor(firstname,"firstname cannot be blank")
	}else{
		setSuccessfor(firstname,"success!")
	}
	
	if(lastnameValue === ''){
		
		setErrorfor(lastname,"lastname cannot be blank")
	}else{
		setSuccessfor(lastname,"success!")
	}
	
}

//creating a function to handle errors
	function setErrorfor(input, message){
		var formControl = input.parentElement;
		var small = formControl.querySelector('small')
		
		small.innerText = message;

		formControl.className = 'form-control error'  
	}
	
	//creating a function to handle success;
	function setSuccessfor(input, message){
		var formControl = input.parentElement;
		var small = formControl.querySelector('small');
		
		small.innerText = message;
		
		formControl.className = 'form-control success'
	}
	
