export function applyPasswordPreview(element, callback) {
    var toggleElement = document.createElement('div');
    toggleElement.classList.add('password-preview-icon');
    toggleElement.classList.add('tl-eye1_svg', 'tl-eye1_svg-dims');
    toggleElement.addEventListener('click', () => {
        if (element.type === 'password') {
            element.type = 'text';
            toggleElement.classList.replace('tl-eye1_svg', 'tl-eye2_svg');
            toggleElement.classList.replace('tl-eye1_svg-dims', 'tl-eye2_svg-dims');
            callback(true);
        } else {
            element.type = 'password';
            toggleElement.classList.replace('tl-eye2_svg', 'tl-eye1_svg');
            toggleElement.classList.replace('tl-eye2_svg-dims', 'tl-eye1_svg-dims');
            callback(false);
        }
    });
    element.parentNode.appendChild(toggleElement);
}
