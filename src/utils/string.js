export function tillNewline(string) {
	return string.slice(0, string.indexOf('\n'));
}

export function bytesToImageBase64(bytes, mime) {
	mime = mime || 'image/jpeg';
	return 'data:'+ mime +';base64,' + btoa(String.fromCharCode.apply(null, bytes));
}

export function getImageMime(constructorType) {
	return 'image/' + constructorType.replace('storage.file', '').toLowerCase();
}