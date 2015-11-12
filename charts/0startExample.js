
  var chart = c3.generate({
                 bindto: '#chart',
                   data: {
                   columns: [
                   ['data1', 0, 200, 100, 400, 150, 2050],
                   ['data2', 50, 20000, 10, 40, 15, 25]
                            ],

 					types: {
       						 data1: 'scatter',
       						 data2: 'bar'
     					   }

                         }           
                  });