import Ember from 'ember';

export
default Ember.View.extend({
    templateName: 'driver',
    didInsertElement: function() {
        this._super();
        var controller = this.get('controller');
        var controllerContent = this.get('controller.model.readings');
        controllerContent = controllerContent.content;
        var vehValuesy = ['Speed'];
        var engValuesy = ['RPM'];
        var odometerValuesy = ['Odometer'];
        var vehValuesx = ['x'];
        if (controllerContent.length > 0) {
            controllerContent.forEach(function(entry) {
                vehValuesx.push(entry.get('timestamp'));
                vehValuesy.push(entry.get('speed'));
                engValuesy.push(entry.get('rpm'));
                odometerValuesy.push(entry.get('odometer'));
            });
            var chart = c3.generate({
                data: {
                    x: 'x',
                    xFormat: '%Y-%m-%d %H:%M:%S',
                    columns: [
                        vehValuesx,
                        vehValuesy,
                        engValuesy,
                        odometerValuesy
                    ]
                },
                axis: {
                    x: {
                        type: 'category',
                        tick: {
                            culling: {
                                max: 4 // the number of tick texts will be adjusted to less than this value
                            }
                        }
                    }
                }
            });
        } else {
            controller.set('nodata', true);
        }
    }
});
