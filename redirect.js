// firebase config info should be placed here

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("u")) {
	u = urlParams.get("u");
	firebase.database().ref("URLS/" + u).on("value", function(snapshot){
		var lnk = snapshot.val().URL;
        document.write("Redirecting to " + lnk + ".");
		window.location.href = lnk;
	});
} else {
	window.location.href = ""; // go back to main page where generation occurs.
}
