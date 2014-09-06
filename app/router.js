import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MhacksWebENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('contact');
  this.route('drivers');
  this.route('driver', { path: 'driver/:driver_id'});
});

export default Router;
