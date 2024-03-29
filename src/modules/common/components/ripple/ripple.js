export function applyRipple(element) {
    element.addEventListener('click', (event) => playRipple(event.target, event))
}

export function playRipple(target, event) {
	if (!target.classList.contains('ripple')) {
		target.classList.add('ripple');
	}
	var element = target;
	var div = document.createElement('div');
	var viewPortCoord = element.getBoundingClientRect();
	var xPos = event.clientX - viewPortCoord.left;
	var yPos = event.clientY - viewPortCoord.top;

	div.classList.add('ripple-effect');
	div.style.height = element.clientHeight;
	div.style.width = element.clientHeight;
	div.style.top = yPos + 'px';
	div.style.left = xPos + 'px';
	div.style.backgroundColor = '#000';

	element.appendChild(div);

	window.setTimeout(() => element.removeChild(element.querySelector('.ripple-effect')), 1000);
}

// function createOverlay(element) {
//     var initialBoundingClientRect = element.getBoundingClientRect();
//     var overlay = document.createElement('div');
//     overlay.style.width = initialBoundingClientRect.width;
//     overlay.style.height = initialBoundingClientRect.height;
//     overlay.style.position = 'absolute';
//     overlay.style.left = initialBoundingClientRect.left;
//     overlay.style.top = initialBoundingClientRect.top;
//     overlay.style.cursor = getComputedStyle(element).getPropertyValue('cursor');
//     overlay.addEventListener('click', (event) => playRipple(element, event));
//     overlay.addEventListener('mouseenter', () => element.classList.add('hover'));
//     overlay.addEventListener('mouseleave', () => element.classList.remove('hover'));
//     document.body.appendChild(overlay);
// }
//
// function playRipple(element, event) {
//     var ripple = document.createElement('div');
//     var boundingClientRect = element.getBoundingClientRect();
//     var xPos = event.clientX - boundingClientRect.left;
//     var yPos = event.clientY - boundingClientRect.top;
//     ripple.classList.add('ripple-effect');
//     ripple.style.height = element.clientHeight;
//     ripple.style.width = element.clientHeight;
//     ripple.style.top = yPos + 'px';
//     ripple.style.left = xPos + 'px';
//     ripple.style.backgroundColor = '#000';
//     element.appendChild(ripple);
//     setTimeout(() => {
//         element.removeChild(ripple);
//         element.dispatchEvent(event);
//     }, 301);
// }