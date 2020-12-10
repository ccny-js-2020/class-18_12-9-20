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

var setDeletionWordsInFirebase = () => {
	firebase.database().ref("deletion_words").set(
		[
			"delete",
			"me",
			"please"
		]
	)
}
setDeletionWordsInFirebase();

firebase.database().ref("deletion_words").on("value", function(snapshot){
	console.log(snapshot.val())
	snapshot.forEach((childSnapshot) => {
		console.log(childSnapshot.val())
		var button = $("<button class='word-button' data-key="+childSnapshot.key+">").text(childSnapshot.val());
		$("#add-to-me").append(button)
	})
});

$(document).on('click', '.word-button', function(){
	$("#add-to-me").empty();
	console.log($(this).data("key"))
	firebase.database().ref("deletion_words/" + $(this).data("key")).remove();
});
