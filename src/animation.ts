function bold(s) {
	return `\x1b[1m${s}\x1b[0m`;
}

function italics(s) {
	return `\x1b[3m${s}\x1b[0m`;
}

function capitalize(s) {
	return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

export function animation(feature) {
	return bold(italics(`Party! Party! Party! - ${capitalize(feature)} Time`));
}

console.log(animation("snacks"));
