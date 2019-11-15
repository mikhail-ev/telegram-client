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

export function hashCode(str) {
	var hash = 0;
	for (var i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	return hash;
}

export function stringToHex(string){
	var hash = hashCode(string);
	var c = (hash & 0x00FFFFFF)
		.toString(16)
		.toUpperCase();

	return "00000".substring(0, 6 - c.length) + c;
}

export function dateToTime(unixDate) {
	var date = new Date(unixDate * 1000);
	return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
}