// Lol why though
lol();

function lol() {
	divvy = document.createElement("div");
	divvy.id = "le-personal-appeal";

	piccy = document.createElement("img");
	piccy.src = chrome.extension.getURL("personalappeal.png");
	piccy.setAttribute("alt", "Le personal appeal.");

	lol = document.body.firstChild;
	lol.parentNode.insertBefore(divvy, lol);
	document.getElementById("le-personal-appeal").appendChild(piccy);
};
