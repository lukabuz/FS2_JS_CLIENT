initFirstList = arr => {
	let list = document.getElementById("1");
	arr.map(val => {
		list.innerHTML += `<li> ${val} </li>`;
	});
};
initSecondList = arr => {
	let list = document.getElementById("2");
	arr.map(val => {
		list.innerHTML += `<li> ${val} </li>`;
	});
};
initThirdList = arr => {
	let list = document.getElementById("3");
	arr.map((key, val) => {
		list.innerHTML += `<dd> ${val} </dd><dt> ${key} </dt>`;
	});
};

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

initLists = () => {
	initFirstList(words.slice(0, 2));
	initSecondList(words.slice(3, 5));

	initThirdList(words.slice(6, 8));
};
