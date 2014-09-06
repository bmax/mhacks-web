import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	value: DS.attr('number'),
	driver: DS.belongsTo('driver'),
	timestamp: DS.attr('date')
});
