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
  },
  buildURL: function(type, id, record) {
    var url = [],
        host = this.get('host'),
        prefix = this.urlPrefix();

    if (type) { url.push(this.pathForType(type)); }

    //We might get passed in an array of ids from findMany
    //in which case we don't want to modify the url, as the
    //ids will be passed in through a query param
    if (id && !Ember.isArray(id)) { url.push(id); }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }

    return url;
  }
});
