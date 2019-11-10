import {init as initRouter} from './modules/router/router';
import {HtmlInputElement} from './components/inputs-group/html-input-element';
import {HtmlDropDownElement} from './components/inputs-group/html-dropdown-element';

initRouter();

var input = document.querySelectorAll("#test")[0];
var tlinput = new HtmlInputElement(input);
var ddel = document.querySelectorAll("#ddtest")[0];
var dd = new HtmlDropDownElement(ddel);
dd.setData([{id: 1, name: 'Text'}, {id: 2, name: 'test'}]);
console.log('bootstrap!');
