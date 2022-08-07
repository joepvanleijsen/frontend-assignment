export function isValueSelected(value, candidate) {
	console.log('isValueSelected()', [value, candidate]);

	if (candidate === undefined || value === undefined) {
		return false;
	}

	if (Array.isArray(candidate)) {
		return candidate.indexOf(value) >= 0;
	}

	return value === candidate;
}
