function add() {
	console.log("Adding");
	++document.getElementById("xs").value;
	calculateTotal();
}

function subtract() {
	console.log("Subtracting");
	var x = document.getElementById("xs").value;
	if (x == 0 || x == "") {
		console.log("no");
	} else {
		--document.getElementById("xs").value;
	}
	calculateTotal();
}

function calculateTotal() {
	console.log("New Total");
	var x = document.getElementById("xs").value;
	document.getElementById("total").innerText = "$" + (x * 24.99).toFixed(2);
}

function addToCart() {
	document.getElementById("number-in-cart").innerText = document.getElementById("xs").value;
}

function displayFailMessage() {
	alert("Please use a valid email address!");
}

function displaySuccessMessage() {
  	alert("Account created successfully!");
}

function createAccount(){

	var emailAddress = document.getElementById('email').value;
	var reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	var valid = reg.test(emailAddress);

	console.log("Is valid? " + valid);

	if (!valid) {
		displayFailMessage();
		document.getElementById('email').value = '';
		return;
	}
		else {
			displaySuccessMessage();
	}

	var customer = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		password: document.getElementById('password').value,
		phone: document.getElementById('phone').value,
		address: {
			street: document.getElementById('street').value,
			apt: document.getElementById('apt').value,
			city: document.getElementById('city').value,
			state: document.getElementById('state').value,
			zip: document.getElementById('zip').value,
		}

	}

	$.ajax({
		type: "POST",
		url: '/customer',
		data: JSON.stringify({customer:customer}),
		contentType:"application/json; charset=utf-8",
    	dataType:"json",
    	success: function(res){
    	  document.getElementById('name').value = ''
    	  document.getElementById('email').value  = ''
    	  document.getElementById('password').value = ''
    	  document.getElementById('phone').value = ''
    	  document.getElementById('street').value = ''
    	  document.getElementById('apt').value = ''
    	  document.getElementById('city').value = ''
    	  document.getElementById('state').value = ''
    	  document.getElementById('zip').value = ''
    	  //alert("Account Created!");

    	}

	});


}

function setDescription(item) {
    console.log("Setting Description...");
    switch(item) {
        case 0:
            document.getElementById("item-title").innerHTML = "T-shirt";
            document.getElementById("item-description").innerHTML = "A fancy shirt, so fancy";
            break;
        case 1:
            document.getElementById("item-title").innerHTML = "Hoodie";
            document.getElementById("item-description").innerHTML = "Check this out yo!";
            break;
        case 2:
            document.getElementById("item-title").innerHTML = "Hat";
            document.getElementById("item-description").innerHTML = "Flip yo' lid";
            break;
        case 3:
            document.getElementById("item-title").innerHTML = "T-shirt";
            document.getElementById("item-description").innerHTML = "Not the same as the first one, but still dank";
            break;
    }
}

function loginSuccessMessage() {
	alert("Login Successful!");
}

function login(){
	$.ajax({
		type: "POST",
		url: '/customer/login',
		data: JSON.stringify({
			email: document.getElementById('login_email').value,
			password: document.getElementById('login_password').value
		}),
		contentType:"application/json; charset=utf-8",
    	dataType:"json",
    	success: function(user){
    		console.log(user);
    		setUser(user);
    		clearLogin();
				loginSuccessMessage();
    		// change login to log out
    		document.getElementById("nav-login").innerHTML = `<a onclick="logout();"><span class="glyphicon glyphicon-log-in"></span> Logout</a>`
    		var event = new Event('user-status-change');
			window.dispatchEvent(event);
    	},
    	err: function(err){
    		console.log(err + "duh");
    	}
	});

	function clearLogin(){
		 document.getElementById('email').value  = ''
    	 document.getElementById('password').value = ''
	}
}

function logoutMessage() {
	alert("Logout Successful!");
}

function logout(){
	clearUser();
	//change logout to login
	document.getElementById("nav-login").innerHTML = `<a data-toggle="popover"><span class="glyphicon glyphicon-log-in"></span> Login</a>`;
	addPopOver();
	var event = new Event('user-status-change');
	window.dispatchEvent(event);
	logoutMessage();
}
// function displayErr(){
// 	return JSON.parse()
// }
function setUser(user){
	window.sessionStorage.setItem('user',JSON.stringify(user));
}

function getUser(){
	return JSON.parse(window.sessionStorage.getItem('user'));
}

function clearUser(){
	window.sessionStorage.setItem('user',null);
}

function isUserLoggedIn(){
	return getUser();
}

window.addEventListener('user-status-change',function(){
	if(isUserLoggedIn()){
		hideSignUp();
	}else{
		showSignUp();
	}
});

function showSignUp(){
	document.getElementById('signup-btn').style['display']='block'

}

function hideSignUp(){
	document.getElementById('signup-btn').style['display']='none'
}

function addPopOver(){
	 $('[data-toggle="popover"]').popover({
                    placement: "bottom",
                    html: true,
                    content: function() {
                       return `<div id="popover_content_wrapper">
                            <input class="in-the-pop" id="login_email" type="email" placeholder="Email Address">
                            <input class="in-the-pop" id="login_password" type="password" placeholder="Password">
                            <div class="in-the-pop" style="text-align:left"><a href="#">Forgot password?</a></div>
                            <button type="button" class="btn btn-primary" id="login" onclick="login();">Login</button><br>
                        </div>`
                    }
                });
}
