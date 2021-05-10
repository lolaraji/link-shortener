    	  var firebaseConfig = {
    apiKey: "AIzaSyBkRxy6zmSQb410qqfrPHJ_Vh72NfcMefM",
    authDomain: "lnkshrt-gq.firebaseapp.com",
    projectId: "lnkshrt-gq",
    storageBucket: "lnkshrt-gq.appspot.com",
    messagingSenderId: "416337524579",
    appId: "1:416337524579:web:8c21b49c98ed2fdc278556",
    measurementId: "G-H2VBCMDSSN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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
	window.location.href = "https://link-shortener.lolaraji.repl.co";
}