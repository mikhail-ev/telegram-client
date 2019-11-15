export function tillNewline(string) {
	var newLineIndex = string.indexOf('\n');
	if (newLineIndex !== -1) {
		return string.slice(0, newLineIndex);
	}
	return string;
}

export function bytesToImageBase64(bytes, mime) {
	mime = mime || 'image/jpeg';
	return 'data:' + mime + ';base64,' + btoa(String.fromCharCode.apply(null, bytes));
}

export function getImageMime(constructorType) {
	return 'image/' + constructorType.replace('storage.file', '').toLowerCase();
}