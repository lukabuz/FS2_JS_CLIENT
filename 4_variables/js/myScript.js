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

initList = () => {
	let list = document.getElementById("list");
	words.map((value, key) => {
		list.innerHTML += `<li>${numbers[key]} - ${value}</li>`;
	});
};
