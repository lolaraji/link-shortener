// firebase config info
  
  function str(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

  
  var url, code, resUrl;
  
  function Ready() {
  	url = document.getElementById("link").value;
  code = str(5);
  resUrl = document.getElementById("result-url");
  	
  }

function addLink() {
	Ready();
		firebase.database().ref("URLS/" + code).set({
				    Code: code,
				    URL: url
	  });
  resUrl.innerHTML = "Generated URL: ?u=" + code + "." // VERY IMPORTANT: EDIT THIS - whatever url you setup, such as https://www.gle.co
  if (url == "https://www.youtube.com/watch?v=dQw4w9WgXcQ") {
  	alert("Have fun Rick-Rolling! ;)") // just for fun, you can remove this if you'd like.
  }
}

function copyUrl() {
	var resU = document.getElementById("res-url");
	resU.select();
	resU.setSelectionRange(0, 99999); 
  document.execCommand("copy");
}

function find() {
	// firebase config info

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("u") == true) {
		const u = urlParams.get("u");
	firebase.database().ref("URL/" + url).on("value", function(snapshot){
		var link = snapshot.val().URL;
		window.location.href = link;
	});
} else {
	window.location.href = ""; // the page where the generation of the link occurs
}
}
