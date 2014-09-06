import Base from 'simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({
    authorize: function(jqXHR, requestOptions) {
        var accessToken = this.get('session.auth_token');
        console.log("accessToken: " + accessToken);
        if (!Ember.isEmpty(accessToken)) {
           jqXHR.setRequestHeader('authorization', 'Token ' + accessToken);
        }
    }
});
