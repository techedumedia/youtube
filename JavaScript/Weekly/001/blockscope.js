

function MakeMyFood(){
	// I can't have my sandwich (line #15) here but I can have my drink (line #16).
	try{
		// This statement will result in a ReferenceError exception thrown.
		console.log(sandwich + " and " + drink);
	}
	catch(e){
		console.log("Uh Oh! I have no sandwich!");
	}
	
	for(let i=0; i<3; i++){
		//Declared variables here
		let sandwich = "Ham and Cheese"; //Visible only in the scope of the for loop
		var drink = "Ginger Ale";			//Visible in the scope of this function
		console.log(sandwich + " and " + drink);
	}
	
	// I can't have my sandwich here but I can have my drink.
	try{
		// This statement will result in a ReferenceError exception thrown.
		console.log(sandwich + " and " + drink);
	}
	catch(e){
		console.log("Uh Oh! I have no sandwich!");
	}
}


// I can't have my sandwich here but I can have my drink.
try{
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
// Ham and Cheese and Ginger Ale
// Ham and Cheese and Ginger Ale
// Uh Oh! I have no sandwich!