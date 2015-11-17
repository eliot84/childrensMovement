var mfdrops = c3.generate({
    bindto: '#mfdrops',
    data: {
         types: {
            Male: 'area',
            Female: 'area'
        },

        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2010-01-01', '2011-01-02', '2012-01-03', '2013-01-04', '2014-01-05'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
          ['Male', 13.0, 14.4, 14.9, 15.6, 13.5],
          ['Female', 9.8, 8.4, 11.0, 9.9, 7.8] 
           
        ]
    },
          

    axis: {
        y: {
            tick:{
            format: function(d){
                                return d + '%';
                               }
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
    mfdrops.load({
        columns: [
          
        ]
    });
}, 1000);
*/
