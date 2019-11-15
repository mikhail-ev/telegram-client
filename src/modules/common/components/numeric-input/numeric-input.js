export function applyNumericInput(element) {
    element.addEventListener('input', (event) => {
		event.target.value = (event.target.value || '').replace(/\D*/g, '');
    });
}
