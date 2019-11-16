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
	ele.className = ele.className.replace(/\s+/g, ' ').trim();
}

function removeClass(ele, cls) {
	if (hasClass(ele, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		ele.className = ele.className.replace(reg, ' ');
	}
}

function showElement(element) {
	removeClass(element, 'd-none');
	addClass(element, 'd-block');
}

function hideElement(element) {
	removeClass(element, 'd-block');
	addClass(element, 'd-none');
}

function focusFirstInput(container) {
	setTimeout(function () {
		var input = container.querySelector('input');
		if (input) {
			input.focus();
		}
	});
}

function delegate(event, selector, delegator) {
	for (let target = event.target; target && target !== delegator; target = target.parentNode) {
		if (target.matches(selector)) {
			return target;
		}
	}
	return null;
}

function scrollToBottom(element) {
	element.scrollTo(0, element.scrollHeight);
}

export { addClass, hasClass, removeClass, mountTemplate, focusFirstInput, delegate, scrollToBottom, showElement, hideElement };
