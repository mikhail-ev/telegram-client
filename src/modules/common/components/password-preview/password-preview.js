export function applyPasswordPreview(element) {
    var toggleElement = document.createElement('div');
    toggleElement.classList.add('password-preview-icon');
    toggleElement.classList.add('tl-eye1_svg', 'tl-eye1_svg-dims');
    toggleElement.addEventListener('click', () => {
        if (element.type === 'password') {
            element.type = 'text';
            toggleElement.classList.replace('tl-eye1_svg', 'tl-eye2_svg');
            toggleElement.classList.replace('tl-eye1_svg-dims', 'tl-eye2_svg-dims');
        } else {
            element.type = 'password';
            toggleElement.classList.replace('tl-eye2_svg', 'tl-eye1_svg');
            toggleElement.classList.replace('tl-eye2_svg-dims', 'tl-eye1_svg-dims');
        }
    });
    element.parentNode.appendChild(toggleElement);
}