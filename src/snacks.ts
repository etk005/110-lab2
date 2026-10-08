const snacks = [
	"Cheetos",
	"Lays",
	"Doritos",
	"Cape Cod",
];

export function printSnacks() {
	console.log(["Ethan's snacks are:", ...snacks].join("\n"));
}

printSnacks();
