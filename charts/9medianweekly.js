//Unemployment Rate 2014

//Higher education earning potential

var meadianWeekly = c3.generate({
	    bindto: '#medianweekly',

                size: {
                    height: 200
                },
                bar: {
                    width: 10
                },
                padding: {
                    left: 100
                },
                color: {
                    pattern: ['#FABF62', '#ACB6DD']
                },
                data: {
      
                    x: 'x',
                    columns:
                        [
                      ['x', 'Some High School', 'High School Diploma', 'Some College', 'Associate Degree', 'Bachelor Degree', 'Vocational', 'Master Degree', 'PHD'],
                      ['Demand', 488, 668, 741, 792, 1101, 1639, 1326, 1591]
                      ],

                    type: 'bar',
                   
                    color: function(inColor, data) {
                        var colors = [ '#0066ff', '#0066ff', '#33cc33', '#33cc33', '#33cc33', '#ff9900', '#ff9900', '#ff9900'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },

                 grid: {
      
        y: {
            show: true
        }
    },
                axis: {
                    y: {

                      tick:{
                            values: [0, 400, 800, 1200, 1600],
                            format: function(d){
                                return '$' + d ;
                               }
                        }
        },

                    rotated: true,
                    x: {
                        type: 'category'
                    }
                },
                tooltip: {
                    grouped: false
                },
                legend: {
                    show: false
                }
            });