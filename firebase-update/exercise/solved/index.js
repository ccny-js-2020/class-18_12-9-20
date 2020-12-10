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

firebase.database().ref("update_words_three").set(["Hello", "Goodbye", "Beatles"]);

var updateListOnDom = () => {
	firebase.database().ref("update_words_three").on("value", function(snapshot){
		$("#firebase-list").empty();
		snapshot.forEach((childSnapshot) => {
			var li = $("<li>");
			li.text(childSnapshot.val())
			li.addClass("list-item");
			li.attr("key", childSnapshot.key);
			$("#firebase-list").append(li);
		})
	});
}

updateListOnDom();

$(document).on("click", ".list-item", function(){
	var key = $(this).attr("key");
	console.log(key)

	var updates = {};
  updates[key] = "i've been updated";
	console.log(updates)

	firebase.database().ref(`update_words_three`).update(updates)
	updateListOnDom();
});
