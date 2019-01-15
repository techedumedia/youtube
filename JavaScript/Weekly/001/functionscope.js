
function MakeMyFood(){
	
	// I can't have my sandwich (line #14) here but I can have my drink (line #15).
	try{
		// This statement will result in a ReferenceError exception thrown.
		console.log(sandwich + " and " + drink);
	}
	catch(e){
		console.log("Uh Oh! I have no sandwich!");
	}
	
	//Declared variables here
	let sandwich = "Ham and Cheese";
	var drink = "Ginger Ale";
	
	// These variables are visible within the scope of the function
	// I can have my sandwich and drink here
	console.log(sandwich + " and " + drink);
}



try{
	// I can't have my sandwich or my drink here.
	// This statement will result in a ReferenceError exception thrown.
	console.log(sandwich + " and " + drink);
}
catch(e){
	console.log("Uh Oh! I have no sandwich or drink!");
}

MakeMyFood();

//********* Output *************
// Uh Oh! I have no sandwich or drink!
// Uh Oh! I have no sandwich!
// Ham and Cheese and Ginger Ale