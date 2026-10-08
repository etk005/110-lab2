export const movies: string[] = [
	"Obsession",
	"The Odyssey",
	"Inglorious Basterds",
	"Sean of the Dead",
	"The Grand Budapest Hotel",
	"Superbad",
	"Vivarium"
];

export function printMovies(): void {
	console.log(["Ethan's movies are:", ...movies].join("\n"));
}

// printMovies();
