export var routing = {
    'login': {
        name: 'login',
        file: 'login.js'
    },
	'debug': {
    	name: 'debug',
		file: 'debug.js'
	},
    '*': {
        name: 'messenger',
        file: 'messenger.js'
    }
};
