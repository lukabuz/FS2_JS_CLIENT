changeTitle = () => {
	try {
		let title = prompt("Please enter a page title name");
		if (title === "") return;
		document.title = title;
		console.log("title changed to " + title);
	} catch (e) {
		document.title = "fs2";
		alert(e);
		return;
	}
};
