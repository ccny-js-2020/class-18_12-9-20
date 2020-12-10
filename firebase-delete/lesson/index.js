//adding the firebase app to my application
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

/* Deleting a whole ref from the firebase database */

//creating a function that will ...
function setDeletionWordsInFirebase(refName) {
	//adding a ref to the database named "deletion_words_two"
	//that will be set to equal an array
	firebase.database().ref(refName).set(["delete","me","please"]);
}
//running the function above which sets the ref in the database
setDeletionWordsInFirebase("deletion_words_two");

//getting the current value of the "deletion_words_two" ref before deletion
firebase.database().ref("deletion_words_two").on("value", function(snapshot){
	//looging the value of the "deletion_words_two" ref
	console.log(snapshot.val())
});

//deleting the "deletion_words_two" ref from the firebase database
firebase.database().ref("deletion_words_two").remove();

//getting the current value of the "deletion_words_two" ref after deletion
firebase.database().ref("deletion_words_two").on("value", function(snapshot){
	//looging the value of the "deletion_words_two" ref
	//returns null
	console.log(snapshot.val())
});

/* Deleting an index from an array from the firebase database */

//running the function above which sets the ref in the database
setDeletionWordsInFirebase("deletion_words_three");

//getting the current value of the "deletion_words_three" ref before removing an item
firebase.database().ref("deletion_words_three").on("value", function(snapshot){
	//looping through the array that we got from the database
	snapshot.forEach((childSnapshot) => {
		//logging the key and value for each index in the array
		console.log("index key: " + childSnapshot.key);
		console.log("index value: " + childSnapshot.val());
	})
});

//removing/deleting the item from the firebase database under the "deletion_words_three" ref with a key of 0
firebase.database().ref("deletion_words_three/0").remove();
// firebase.database().ref("deletion_words_three/1").remove();
firebase.database().ref("deletion_words_three").push("whatever");

//getting the current value of the "deletion_words_three" ref after removing an item
firebase.database().ref("deletion_words_three").on("value", function(snapshot){
	//looping through the array that we got from the database
	snapshot.forEach((childSnapshot) => {
		if(childSnapshot.val() == "whatever"){
			console.log(childSnapshot.key)
			console.log(childSnapshot.val())
			// if i want to delete an index from the array that i get from firebase
			// if i do not know they but i know the value
			firebase.database().ref("deletion_words_three/" + childSnapshot.key).remove();
		}
	})
});

//getting the current value of the "deletion_words_three" ref after removing an item
firebase.database().ref("deletion_words_three").on("value", function(snapshot){
	//looping through the array that we got from the database
	snapshot.forEach((childSnapshot) => {
		//logging the key and value for each index in the array
		console.log("index key: " + childSnapshot.key);
		console.log("index value: " + childSnapshot.val());
	})
});
