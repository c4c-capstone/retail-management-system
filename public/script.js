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

function createAccount(){
	
	var emailAddress = document.getElementById('email').value;
	var reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	var valid = reg.test(emailAddress);
	
	console.log("Is valid? " + valid);
	
	if (!valid) {
		alert("Invalid");
		return;
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
    	success: function(res){
    		console.log(res);
    	//	clearLogin();
    	},
    	err: function(err){
    		console.log(err + "duh");
    	} 
	});
	// function clearLogin(){
	// 	 document.getElementById('email').value  = ''
 //    	 document.getElementById('password').value = ''
	// }
}