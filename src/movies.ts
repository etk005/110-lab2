const movies = [
	"Obsession",
	"The Odyssey",
	"Inglorious Basterds",
	"Sean of the Dead"
];

export function printMovies() {
	console.log(["Ethan's movies are:", ...movies].join("\n"));
}

// printMovies();
