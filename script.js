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
<<<<<<< HEAD

} 
=======
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
>>>>>>> 8c9b137ed0060f3a4d714451fc602f86d20961c2
