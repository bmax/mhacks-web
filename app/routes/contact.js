import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		viewToken: function () { this.controller.set('viewToken', true);}
	}
});
