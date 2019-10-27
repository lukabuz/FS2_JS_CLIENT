handleSubmit = () => {
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let favouriteSong = document.getElementById("favouriteSong").value;
	if (
		firstName.length === 0 ||
		lastName.length === 0 ||
		favouriteSong.length === 0
	) {
		alert("please enter all fields");
		return;
	} else {
		updateData(firstName, lastName, favouriteSong);
		goToPage("displayPage");
	}
};

updateData = (firstName, lastName, favouriteSong) => {
	document.getElementById("showName").innerHTML = firstName;
	document.getElementById("showLastName").innerHTML = lastName;
	document.getElementById("showSong").innerHTML = favouriteSong;
};

hideElements = elements => {
	elements.map(val => {
		document.getElementById(val).style.display = "none";
	});
};

goToPage = element => {
	hideElements(["mainPage", "formPage", "displayPage"]);
	document.getElementById(element).style.display = "block";
};

init = () => {
	goToPage("mainPage");
};
