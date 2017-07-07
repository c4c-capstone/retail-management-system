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
	var user = {
		name: document.getElementById('name').value,
		password: document.getElementById('password').value,
		email: document.getElementById('email').value,
	}

	$.ajax({
	  type: "POST",
	  url: '/users',
	  data: {user:user}
	});

	document.getElementById('name').value = ''
	document.getElementById('password').value=''
	document.getElementById('email').value  = ''

} 