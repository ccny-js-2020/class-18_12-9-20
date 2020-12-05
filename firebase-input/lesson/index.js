$(document).ready(function(){

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

	// setting firebase ref when document loads
	firebase.database().ref('words').set(["paperback", "writer"]);

	// adding to the firebase array on click
	$("#click-me").click(function(){
		var inputValue = $("#firebase-input").val();

		firebase.database().ref('words').push(inputValue);
	});

	// seeing the value of the items in the array
	firebase.database().ref('words').on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			console.log(childSnapshot.val());
		});
	});

});