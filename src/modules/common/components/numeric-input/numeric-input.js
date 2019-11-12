export function applyNumericInput(element) {
    var oldValue = element.value;
    element.addEventListener('input', (event) => {
        var value = event.target.value;
        if (!/^[0-9]*$/.test(value)) {
            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();
            event.target.value = oldValue;
        } else {
            oldValue = value;
        }
    });
}