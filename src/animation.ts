function bold(s: string): string {
	return `\x1b[1m${s}\x1b[0m`;
}

function italics(s: string): string {
	return `\x1b[3m${s}\x1b[0m`;
}

function capitalize(s: string): string {
	return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

export function animation(feature: string): string {
	return bold(italics(`Party! Party! Party! - ${capitalize(feature)} Time`));
}

//console.log(animation("snacks"));
