import {addClass, removeClass, hasClass} from '../../utils/dom';//
/*options: {onSelectFn: function(selectedValue){}}*/

function HtmlDropDownElement(element, options) {
	this.element = element;
	this.$$options = options;
	this.$$initMenuEvents();
}

HtmlDropDownElement.prototype.$$initMenuEvents = function () {
	var self = this;
	self.$$wrapper = self.element.querySelectorAll('.tl-dropdown__wrapper')[0];
	self.$$input = self.element.querySelectorAll('.tl-dropdown__input')[0];
	self.$$content = self.element.querySelectorAll('.tl-dropdown__content')[0];
	self.$$iconUp = self.element.querySelectorAll('.tl-dropdown__toggle-icon-up')[0];
	self.$$iconDown = self.element.querySelectorAll('.tl-dropdown__toggle-icon-down')[0];

	self.$$handleDocumentClickFn = function (event) {
		if (!self.$$isOpened || !event.target /*|| jQuery(event.target).hasClass(dd.toogleIconClass)*/) {
			return;
		} else if ((self.$$input !== event.target && !self.$$content.contains(event.target))) {
			self.hide();
		}
	};

	self.$$handleInputClickFn = function () {
		if (self.$$isOpened) {
			self.hide();
		} else {
			self.open();
		}
	};

	self.$$handleSelectFn = function (event) {
		if (hasClass(event.target, 'tl-dropdown__list-item')) {
			var value = self.$$data.find(function (item) {
				return item.id == event.target.getAttribute('data.id');
			});
			self.$$input.value = value[self.$$displayName];
			if (self.$$options.onSelectFn) {
				self.$$options.onSelectFn(value);
			}

			self.hide();
		}
	};

	self.$$handleInputChangeFn = function (event) {
		self.$$callAutosuggest(self.$$input.value);
	};

	self.$$handleInputFocusFn = function (event) {
		addClass(self.$$wrapper, 'tl-dropdown__wrapper_blue-border');
	};

	self.$$handleInputBlurFn = function (event) {
		removeClass(self.$$wrapper, 'tl-dropdown__wrapper_blue-border');
	};
	self.$$input.addEventListener('focus', self.$$handleInputFocusFn);
	self.$$input.addEventListener('blur', self.$$handleInputBlurFn);
	self.$$input.addEventListener('keyup', self.$$handleInputChangeFn);
	self.$$content.addEventListener('click', self.$$handleSelectFn);
	self.$$wrapper.addEventListener('click', self.$$handleInputClickFn);
	document.addEventListener('click', self.$$handleDocumentClickFn);
};

HtmlDropDownElement.prototype.$$callAutosuggest = function (substring) {
	var self = this;
	if (!self.$$isOpened) {
		return;
	}
	if (substring) {
		var items = self.$$data.filter(function (item) {
			return item[self.$$displayName].toLowerCase().includes(substring.toLowerCase());
		});

		if (items.length > 0) {
			self.$$availableItems = items;
		} else {
			self.$$availableItems = self.$$data;
		}
	}
	self.$$renderData(self.$$availableItems);

};

HtmlDropDownElement.prototype.$$renderData = function (dataArray) {
	console.log(dataArray);
	var self = this;
	var ul = document.createElement('ul');
	self.$$content.innerHTML = '';
	ul.classList.add('tl-dropdown__list');
	for (var i = 0; i < self.$$availableItems.length; i++) {
		var li = document.createElement('li');
		li.classList.add('tl-dropdown__list-item');
		li.innerText = dataArray[i][self.$$displayName];
		li.setAttribute('data.id', dataArray[i][self.$$id]);
		ul.appendChild(li)
	}
	self.$$content.appendChild(ul);
};

HtmlDropDownElement.prototype.setData = function (dataArray, options) {
	var self = this;
	self.$$id = 'id';
	self.$$displayName = 'name';
	self.$$data = dataArray;
	self.$$availableItems = dataArray;
	if (options) {
		self.$$id = options.id || self.$$id;
		self.$$displayName = options.displayName || self.$$displayName;
	}

	self.$$renderData(self.$$availableItems);
};

HtmlDropDownElement.prototype.open = function () {
	var self = this;
	self.$$isOpened = true;
	self.$$callAutosuggest(self.$$input.value);
	addClass(self.element, 'tl-dropdown_open');
	removeClass(self.$$iconUp, 'd-none');
	addClass(self.$$iconUp, 'd-block');
	addClass(self.$$iconDown, 'd-none');
};

HtmlDropDownElement.prototype.hide = function () {
	var self = this;
	self.$$isOpened = false;
	removeClass(self.element, 'tl-dropdown_open');

	removeClass(self.$$iconDown, 'd-none');
	addClass(self.$$iconDown, 'd-block');
	addClass(self.$$iconUp, 'd-none');
};

HtmlDropDownElement.prototype.destroy = function () {
	var self = this;
	self.$$input.removeEventListener('keyup', self.$$handleInputChangeFn);
	self.$$wrapper.removeEventListener('click', self.$$handleInputClickFn);
	document.removeEventListener('click', self.$$handleDocumentClickFn);
};

export {HtmlDropDownElement};
