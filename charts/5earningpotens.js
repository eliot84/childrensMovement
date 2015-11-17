//Higher education earning potential

var earningpoten = c3.generate({
	    bindto: '#earningpoten',

                size: {
                    height: 140
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
                      ['x', 'High School', 'Associate Degree', 'Master Degree', 'PHD Degree'],
                      ['Earning', 32500, 42000, 63000, 100000]
                      ],

                    type: 'bar',
                   
                    color: function(inColor, data) {
                        var colors = ['#0073e6', '#ff9933', '#009900', '#ff3300'];
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
                			values: [0, 20000, 40000, 60000, 80000, 100000],
                			format: function(d){
    		                	return '$' + (d * .001) + 'k' ;
    		                   }
                		}
    		//tick:{

    		/*format: function(d){
    		                	return '$' + d ;
    		                   }
    	         } */
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