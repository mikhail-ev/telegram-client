export const routeNames = {
	messenger: 'messenger',
	debug: 'debug',
	login: 'login',
	defaultPage: '*',
};

export var routing = {
	[routeNames.login]: {
		name: routeNames.login,
		file: 'login.js'
	},
	[routeNames.debug]: {
		name: routeNames.debug,
		file: 'debug.js'
	},
	'*': {
		name: routeNames.messenger,
		file: 'messenger.js'
	}
};

