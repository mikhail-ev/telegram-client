import {init as initRouter} from './modules/router/router';
import { Toastify } from './modules/common/components/toastify/toastify';

// setting base dc
localStorage.setItem('dc', 2);

initRouter();

console.log('bootstrap!');


// Toastify({
// 	text: "This is a toast message",
// 	gravity: 'bottom',
// 	duration: 5000
// }).showToast();
