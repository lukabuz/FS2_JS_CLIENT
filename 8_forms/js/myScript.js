formPage = () => window.location.replace("form.html");

mainPage = () => window.location.replace("index.html");

handleSubmit = () => {
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let favouriteSong = document.getElementById("favouriteSong").value;

	alert(
		`Welcome ${firstName} ${lastName}, your favourite song is ${favouriteSong}`
	);
};
