//Higher education earning potential

var employeeCertDemand = c3.generate({
	    bindto: '#employeecertdemand',

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
                      ['Demand', 27, 39, 1, 4, 18, 6, 2, 1]
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
                            values: [0, 10, 20, 30, 40],
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