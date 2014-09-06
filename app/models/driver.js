import DS from 'ember-data';

export default DS.Model.extend({
  token: DS.attr('string'),
  name: DS.attr('string'),
  readings: DS.hasMany('reading')
});
