const movies = [
	"Obsession",
	"The Odyssey",
	"Inglorious Basterds",
	"Sean of the Dead",
	"The Grand Budapest Hotel",
	"Superbad",
	"Vivarium"
];

export function printMovies() {
	console.log(["Ethan's movies are:", ...movies].join("\n"));
}

// printMovies();
