export default {
	name: 'simple-auth-config',
	before: 'simple-auth',
	initialize: function(container) {
		window.ENV = window.ENV || {};
	}
};