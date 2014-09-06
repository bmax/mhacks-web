import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
	host: 'http://fierce-atoll-6906.herokuapp.com',
//  host: 'http://localhost:3000',
	ajaxError: function(jqXHR) {
console.log('error');
	var errors = {};
    var error = this._super(jqXHR);
    if (jqXHR && jqXHR.status === 422) {
      var response = Ember.$.parseJSON(jqXHR.responseText),
          errors = {};

      if (response.errors !== undefined) {
        var jsonErrors = response.errors;

        Ember.EnumerableUtils.forEach(Ember.keys(jsonErrors), function(key) {

          errors[Ember.String.camelize(key)] = jsonErrors[key];
        });
      }
      return new DS.InvalidError(errors);
    } else {
    	errors['response'] = error;
    	errors['isAuthorized'] = false;
      return errors;
    }
  }
});
