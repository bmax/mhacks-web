import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
        return this.store.find('driver');
    },
    actions: {
        viewToken: function(item) {
            item.set('showToken', true);
        },
        submitDriver: function() {
			var _this = this;
			  var driver_name = this.controller.get('driver_name');
			  if (driver_name) {
			    console.log(driver_name);
			    var driver = this.store.createRecord('driver', { name: driver_name }).save().then(function() {
			      // do something here?
			      _this.controller.set('success', true);
			      _this.controller.set('name', driver_name);
			      _this.controller.set('driver_name', null);
			      console.log('success');
			    },
			    function(jq) {
			      // do something here?
			      console.log('error submitting driver');
			      _this.controller.set('error', jq);
			    });
			  }
        }
    }
});
