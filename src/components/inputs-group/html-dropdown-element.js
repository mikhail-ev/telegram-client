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

			if (self.$$options.onSelectFn) {
				self.$$options.onSelectFn(value);
			}

			self.hide();
		}
	};
	self.$$content.addEventListener('click', self.$$handleSelectFn);
	self.$$wrapper.addEventListener('click', self.$$handleInputClickFn);
	document.addEventListener('click', self.$$handleDocumentClickFn);
};
HtmlDropDownElement.prototype.setData = function (dataArray, options) {
	var id = 'id', displayName = 'name';
	var self = this;
	self.$$data = dataArray;
	if (options) {
		id = options.id || id;
		displayName = options.displayName || displayName;
	}
	var ul = document.createElement('ul');
	ul.classList.add('tl-dropdown__list');
	for (var i = 0; i < dataArray.length; i++) {
		var li = document.createElement('li');
		li.classList.add('tl-dropdown__list-item');
		li.innerText = dataArray[i][displayName];
		li.setAttribute('data.id', dataArray[i][id]);
		ul.appendChild(li)
	}
	self.$$content.appendChild(ul);
	// сначала вставить узлы
//	document.body.appendChild(ul); // затем в документ

};

HtmlDropDownElement.prototype.open = function () {
	var self = this;
	self.$$isOpened = true;
	addClass(self.element, 'tl-dropdown_open');
};

HtmlDropDownElement.prototype.hide = function () {
	var self = this;
	self.$$isOpened = false;
	removeClass(self.element, 'tl-dropdown_open');
};

HtmlDropDownElement.prototype.destroy = function () {
	self.$$wrapper.removeEventListener('click', self.$$handleInputClickFn);
	document.removeEventListener('click', self.$$handleDocumentClickFn);
};

export {HtmlDropDownElement};
