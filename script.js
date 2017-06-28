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