import {init as initRouter} from './modules/router/router';

// setting base dc
localStorage.setItem('dc', 2);

initRouter();

console.log('App is bootstrapped!');
