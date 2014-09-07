import DS from 'ember-data';

export default DS.Model.extend({
	speed: DS.attr('number'),
	rpm: DS.attr('number'),
	odometer: DS.attr('number'),
	driver: DS.belongsTo('driver'),
	timestamp: DS.attr('date')
});
