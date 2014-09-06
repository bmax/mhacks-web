import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(ApplicationRouteMixin, {
  	actions: {
  		authenticateSession: function() {
 			console.log('authenticateSession called');
 			console.log(this.get('session.auth_token'));
  			this.get('session').authenticate('authenticator:custom', {});

  		}
 	 }
});