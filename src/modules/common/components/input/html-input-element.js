function HtmlInputElement(element, onValueChangeFn) {
	this.element = element;
	this.onValueChangeFn = onValueChangeFn;
	this.enableSyncValue();
}

HtmlInputElement.prototype.enableSyncValue = function () {
	var self = this;
	self.syncValueFn = function () {
		self.element.setAttribute('value', this.value);
		if (typeof self.onValueChangeFn === 'function') {
			self.onValueChangeFn();

		}
	};

	self.element.addEventListener('keyup', self.syncValueFn);
	self.element.addEventListener('change', self.syncValueFn);
};

HtmlInputElement.prototype.destroy = function () {
	var self = this;
	self.element.removeEventListener('keyup', self.syncValueFn);
	self.element.removeEventListener('change', self.syncValueFn);
};

export {HtmlInputElement};
