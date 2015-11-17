//Unemployment Rate 2014

//Higher education earning potential

var unemploy2014 = c3.generate({
	    bindto: '#unemploy2014',

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
                      ['Demand', 9.0, 6.0, 6.0, 4.5, 3.5, 1.9, 2.8, 2.1]
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

                        max: 9,
                        min: 1,
            tick:{
            format: function(d){
                                return d + '%';
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