var dropout = c3.generate({
    bindto: '#dropout',
    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2010-01-01', '2011-01-02', '2012-01-03', '2013-01-04', '2014-01-05'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
          ['Student Dropout Rate', 2.0, 1.9, 1.9, 2.0, 1.9]
        ]
    },
     grid: {
 
        y: {
            show: true
        }
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


