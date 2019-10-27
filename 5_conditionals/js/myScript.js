const words = [
	"overrated",
	"sneaky",
	"sea",
	"enchanted",
	"medical",
	"wakeful",
	"ruthles",
	"useful",
	"vast"
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filterWords = letter => {
	return words.filter(val => {
		return val[0] === letter;
	});
};

filterNumbers = number => {
	return numbers.filter(val => {
		console.log(val);
		return val > number;
	});
};

submitLetter = () => {
	let letter = document.getElementById("letter").value;
	if (!isNaN(letter) || letter.length !== 1) {
		alert("please try again");
		return;
	} else {
		renderWords(filterWords(letter), letter);
	}
};

renderNumbers = (array, number) => {
	let numbersList = document.getElementById("numbers");
	numbersList.innerHTML = "";
	array.map(val => {
		numbersList.innerHTML += `<li>${val}</li>`;
	});
	document.getElementById("numbersHeading").innerHTML =
		"All numbers larger than " + number;
};

renderWords = (array, letter) => {
	let wordsList = document.getElementById("words");
	wordsList.innerHTML = "";
	array.map(val => {
		wordsList.innerHTML += `<li>${val}</li>`;
	});
	document.getElementById("wordsHeading").innerHTML =
		"All words starting with " + letter;
};

submitNumber = () => {
	let number = document.getElementById("number").value;
	if (isNaN(number)) {
		alert("please try again");
		return;
	} else {
		renderNumbers(filterNumbers(number), number);
	}
};

init = () => {
	let wordsList = document.getElementById("words");
	words.map(val => {
		wordsList.innerHTML += `<li>${val}</li>`;
	});
	let numbersList = document.getElementById("numbers");
	numbers.map(val => {
		numbersList.innerHTML += `<li>${val}</li>`;
	});
};
