import { addClass, removeClass, hasClass } from '../../../../utils/dom';

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
	self.$$label = self.element.querySelector('.tl-dropdown__label');
	self.$$selected = false;

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
		if (hasClass(event.target, 'tl-dropdown__list-item-content-wrapper') || event.target.closest('.tl-dropdown__list-item-content-wrapper')) {
			var elem = hasClass(event.target, 'tl-dropdown__list-item-content-wrapper') ? event.target : event.target.closest('.tl-dropdown__list-item-content-wrapper');
			var value = self.$$data.find(function (item) {
				return item.id == elem.getAttribute('data.id');
			});
			self.$$setValue(value);
		}
	};
	self.$$handleInputChangeFn = function (event) {
		self.$$input.setAttribute('value', self.$$input.value);
		self.$$callAutosuggest(self.$$input.value);
		self.$$selected = false;
	};

	self.$$handleInputFocusFn = function (event) {
		addClass(self.$$wrapper, 'tl-dropdown__wrapper_border-blue');
		removeClass(self.$$iconDown, 'tl-dropdown__toggle-icon_grey');
		addClass(self.$$iconDown, 'tl-dropdown__toggle-icon_blue');
		removeClass(self.$$iconUp, 'tl-dropdown__toggle-icon_grey');
		addClass(self.$$iconUp, 'tl-dropdown__toggle-icon_blue');
	};

	self.$$handleInputBlurFn = function (event) {
		if (!self.$$input.value) {
			removeClass(self.$$wrapper, 'tl-dropdown__wrapper_border-blue');
			removeClass(self.$$iconDown, 'tl-dropdown__toggle-icon_blue');
			addClass(self.$$iconDown, 'tl-dropdown__toggle-icon_grey');
			removeClass(self.$$iconUp, 'tl-dropdown__toggle-icon_blue');
			addClass(self.$$iconUp, 'tl-dropdown__toggle-icon_grey');
		}
	};
	self.$$content.addEventListener('mouseover', function (event) {
		if (hasClass(event.target, 'tl-dropdown__list-item')) {
			var value = self.$$data.find(function (item) {
				return item.id == event.target.getAttribute('data.id');
			});
			if (!self.$$input.value) {
				self.$$label.innerText = value[self.$$displayName];
			}
		}

	});
	self.$$input.addEventListener('focus', self.$$handleInputFocusFn);
	self.$$input.addEventListener('blur', self.$$handleInputBlurFn);
	self.$$input.addEventListener('input', self.$$handleInputChangeFn);
	self.$$content.addEventListener('click', self.$$handleSelectFn);
	self.$$wrapper.addEventListener('click', self.$$handleInputClickFn);
	document.addEventListener('click', self.$$handleDocumentClickFn);
};

HtmlDropDownElement.prototype.$$callAutosuggest = function (substring) {
	var self = this;
	// if (!self.$$isOpened) {
	// 	return;
	// }
	if (substring && !self.$$selected) {
		var items = self.$$data.filter(function (item) {
			return item[self.$$displayName].toLowerCase().includes(substring.toLowerCase().replace('+', ''));
		});

		self.$$availableItems = items;
	} else {
		self.$$availableItems = self.$$data;
	}
	self.$$renderData(self.$$availableItems);

};

HtmlDropDownElement.prototype.$$renderData = function (dataArray) {
	var self = this;
	var ul = document.createElement('ul');
	self.$$content.innerHTML = '';
	ul.classList.add('tl-dropdown__list');
	for (var i = 0; i < self.$$availableItems.length; i++) {
		var li = document.createElement('li');
		li.classList.add('tl-dropdown__list-item');
		li.innerHTML += "<div class='tl-dropdown__list-item-content-wrapper' data.id='" + dataArray[i].id + "'><div class='tl-dropdown__list-item-flag-name'><i class='tl-dropdown__list-item-flag'>" + dataArray[i].icon + "</i>" +
			"<span>" + dataArray[i][self.$$displayName] + "</span></div>" +
			"<span class='tl-dropdown__list-item-phone-code'>" + dataArray[i].phoneCode + "</span></div>";


		li.setAttribute('data.id', dataArray[i][self.$$id]);
		ul.appendChild(li)
	}
	self.$$content.appendChild(ul);
};

HtmlDropDownElement.prototype.setValue = function (countryCode, countryName) {
	console.log(countryCode, countryName);
	var self = this;
	var value = self.$$data.find(function (item) {
		return item.phoneCode.slice(1, item.phoneCode.length) == countryCode && item[self.$$displayName].toLowerCase() === countryName.toLowerCase();
	});
	this.$$setValue(value);
};

HtmlDropDownElement.prototype.$$setValue = function (value) {
	var self = this;
	self.$$input.value = value[self.$$displayName];

	if (self.$$options.onSelectFn) {
		self.$$options.onSelectFn(value);
	}

	addClass(self.$$wrapper, 'tl-dropdown__wrapper_border-blue');
	self.$$label.innerText = 'Country';
	self.$$selected = true;
	self.hide();
};

HtmlDropDownElement.prototype.setValueById = function (countryId) {
	var countryIdLowerCase = countryId.toLowerCase();
	var value = this.$$data.find((item) => item.id.toLowerCase() === countryIdLowerCase);
	if (value) {
		this.$$setValue(value);
	}
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

	if (!self.$$selected) {
		self.$$label.innerText = 'Country';
	}
	removeClass(self.element, 'tl-dropdown_open');

	removeClass(self.$$iconDown, 'd-none');
	addClass(self.$$iconDown, 'd-block');
	addClass(self.$$iconUp, 'd-none');
};

HtmlDropDownElement.prototype.destroy = function () {
	var self = this;
	self.$$input.removeEventListener('focus', self.$$handleInputFocusFn);
	self.$$input.removeEventListener('blur', self.$$handleInputBlurFn);
	self.$$input.removeEventListener('input', self.$$handleInputChangeFn);
	self.$$content.removeEventListener('click', self.$$handleSelectFn);
	self.$$wrapper.removeEventListener('click', self.$$handleInputClickFn);
	document.removeEventListener('click', self.$$handleDocumentClickFn);
};

export { HtmlDropDownElement };
