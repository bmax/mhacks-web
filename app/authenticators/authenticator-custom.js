import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
  restore: function(properties) {
    console.log('restore');
    console.log(properties);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(properties.auth_token)) {
         Ember.$.ajaxSetup({
            headers: {
              'authorization':  'Token ' + properties.auth_token
            }
          });
        resolve(properties);
      } else {
        reject();
      }
    });
  },
	authenticate: function(credentials) { 
    console.log('authenticate call');
  
		return new Ember.RSVP.Promise(function (resolve, reject) {
            // make the request to authenticate the user at endpoint /v3/token
           return Ember.$.ajax({
              url:  'http://fierce-atoll-6906.herokuapp.com/login',
              //url:  'http://localhost:3000/login',
              type: 'POST',
              data: { session: { email: credentials.identification, password: credentials.password } }
            }).then(function(response) {
                // resolve (including the account id) as the AJAX request was successful; all properties this promise resolves
                // with will be available through the session
              Ember.$.ajaxSetup({
                    headers: {
                      'authorization':  'Token ' + response.manager.auth_token
                    }
              });
              resolve(response.manager);
             }, function(xhr, status, error) {
                reject(xhr.responseText);
            });
		});
	},
  invalidate: function() {
    return Ember.RSVP.resolve();
  } 
});
