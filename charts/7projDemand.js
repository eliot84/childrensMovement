

//Projected Demand for jobs 2010 and 2020

var projDemand = c3.generate({
		bindto: '#projdemand',

    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2010-01-01', '2020-01-01'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['Some High School', 37081, 42329], 
            ['High School Diploma', 62089, 69665],
            ['Some College', 811, 953],
            ['Associate Degree', 7994, 9434],
            ['Vocational Degree', 6524, 7624],
            ['Bachelor Degree', 22171, 25827],
            ['Master Degree', 1986, 2417],
            ['PHD', 4409, 5286]
        ]
    },



    axis: {

 y: {
    tick: {
      values: [0, 10000]
    } 
  },

 
 
 

  
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
     
        }
    
   }

});

/*
setTimeout(function () {
    projDemand.load({
        columns: [
            ['High', 20297000, 22106300, 23924300, 25659400, 27305800, 28899800]
        ]
    });
}, 1000);
*/
