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

firebase.database().ref("list-items").set([])

$("#add-list-item").click(function(){
	var inputValue = $("#list-item-input").val();

	firebase.database().ref('list-items').push(inputValue)
});

firebase.database().ref("list-items").on("value", function(snapshot){
	$(".add-list-item-here").empty();
	snapshot.forEach((lyric) => {
		console.log(lyric.val());

		var lyricLi = $("<li>");
		lyricLi.text(lyric.val());
		$(".add-list-item-here").append(lyricLi);
	})
});
