//import your firebase database

// Initialize Firebase

//create a "list-items" reference and set it to an empty array
//check firebase, there should be a "list-items reference that has a value of an empty array"

//when the button to add a list item is clicked on
	//get the value in the input
	//push that input value to the 'list-items' reference array in firebase

/*
	Access the array of 'list-items' from firebase
*/
firebase.database()./* list-items ref here */.on("value", function(snapshot){
	/* empty the ordered list on the dom */

	//loop through the lyrics array
	//add the value of each item in the array to a list item
	//add each list item to the ordered list on the dom

});
