var firebaseConfig = {
	apiKey: "AIzaSyCtRNmmVhqdH3xrEAtOZ8zKE-sLSKS21Sw",
	authDomain: "classapp-1b61b.firebaseapp.com",
	databaseURL: "https://classapp-1b61b.firebaseio.com",
	projectId: "classapp-1b61b",
	storageBucket: "",
	messagingSenderId: "500229754372",
	appId: "1:500229754372:web:cfc2e76462bb9a7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* Updating an index from a ref in the firebase database that is a string array */

//creating a function that will ...
var setUpdateWordsInFirebase = () => {
	//adding a ref to the database named "updated_words_two"
	//that will be set to equal a string array
	firebase.database().ref("update_words_two").set(
		[
			"delete",
			"me",
			"please"
		]
	)
}
//running the function above which sets the ref in the database
setUpdateWordsInFirebase();

//getting the current value of the "update_words_two" ref before the update
firebase.database().ref("update_words_two").on("value", function(snapshot){
	//looging the value of the "update_words_two" ref, which will be an array
	console.log(snapshot.val())
	//getting all of the keys in the array
	console.log(Object.keys(snapshot.val()))
});

//This is another way to set a key/value pair
//key being "0", and value being "update"
// var update = {"0": "update"};
var update = {}
update["0"] = "update";
console.log(update)
//Updating an object key from a ref in the firebase database
//inserting the update object that i set above
firebase.database().ref("update_words_two").update(update)

//getting the current value of the "update_words_two" ref after update
firebase.database().ref("update_words_two").on("value", function(snapshot){
	//looging the value of the "update_words_two" ref, which will be an array
	console.log(snapshot.val())
	//getting all of the keys in the array
	console.log(Object.keys(snapshot.val()))
});

// adding dynamically to the array in firebase
firebase.database().ref("update_words_two").push("word up");

//getting the current value of the "update_words_two" ref after update
firebase.database().ref("update_words_two").on("value", function(snapshot){
	snapshot.forEach((childSnapshot) => {
		// updating a value in the firebase array dynamically, without knowing the key
		if(childSnapshot.val() == "word up"){
			var updateTwo = {};
			updateTwo[childSnapshot.key] = "bird up";
			firebase.database().ref("update_words_two").update(updateTwo)
		}
	})
});
