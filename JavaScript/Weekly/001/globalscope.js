
// I can't have my sandwich (line #12) here but I can have my drink (line #13).
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

// I can have my sandwich and drink here in the global scope
console.log(sandwich + " and " + drink);

function MakeMyFood(){
	// These variables are global and are visible within the scope of the function
	// I can still have my sandwich and drink here
	console.log(sandwich + " and " + drink);
}

MakeMyFood();

//********* Output *************
// Uh Oh! I have no sandwich!
// Ham and Cheese and Ginger Ale
// Ham and Cheese and Ginger Ale