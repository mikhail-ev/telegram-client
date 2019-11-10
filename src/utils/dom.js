function mountTemplate(containerId, templateId) {
	var container = document.getElementById(containerId);
	var template = document.getElementById(templateId);
	container.innerHTML = template.innerHTML;
}

function hasClass(ele, cls) {
	return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
	if (!hasClass(ele, cls)) ele.className += ' ' + cls;
}

function removeClass(ele, cls) {
	if (hasClass(ele, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		ele.className = ele.className.replace(reg, ' ');
	}
}

export {addClass, hasClass, removeClass, mountTemplate};
