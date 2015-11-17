


/* var drop = c3.generate({
    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2010-01-01', '2011-01-02', '2012-01-03', '2013-01-04', '2014-01-05'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['Dropout Rate', 2.0, 1.9, 1.9, 2.0, 1.9]
    
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    }
});

*/














































/*

Poverty rates for persons in the labor force 27 weeks or more by educational attainment, 1998	

Less than H.S. diploma		14.5
High school diploma		 6.6
Some college, no degree		 4.5
Associates degree		 2.8
College graduates		 1.4

http://www.bls.gov/opub/ted/2000/Sept/wk4/art03.txt
*/



/*
Dropouts by county 2014
District White Black or African
American Hispanic/Latino Asian
American
Indian/ Alaska
Native
Two or More
Races Pacific Islander


District   

White    
Black or African American   
Hispanic/Latino    
Asian    
American Indian/Alaska Native   
Two or more races   
Pacific Islander


if white{
	newArray = district and first number (for all districts)
}

newArray


00 FLORIDA 1.3, 3.0, 2.0, 0.5, 1.7, 1.3, 1.2,


var fullDropouts 
*/

/*
var fullDropouts = [

['ALACHUA', 1.1, 4.7, 2.5, 0.0, 0.0, 1.4, 0.0],
['BAKER', 0.4, 0.6, 0.0, 0.0, 0.0, 0.0],
['BAY', 1.5, 1.2, 0.2, 0.0, 0.0, 3.9, 0.0],
['BRADFORD', 1.2, 1.9, 8.3, 0.0, 0.0, 0.0, 0.0],
['BREVARD', 0.5, 1.3, 0.4, 0.0, 2.0, 1.1, 0.0],
['BROWARD', 1.2, 2.8, 1.5, 0.6, 1.4, 1.2, 1.6],
['CALHOUN', 1.8, 2.6, 3.0, 0.0, 0.0, 3.4],
['CHARLOTTE', 2.4, 2.9, 2.4, 0.0, 0.0, 1.3, 0.0],
['CITRUS', 1.3, 1.8, 0.6, 0.0, 3.4, 1.9, 0.0],
['CLAY', 1.0, 1.3, 0.8, 0.6, 0.0, 0.8, 0.0],
['COLLIER', 1.0, 2.1, 2.2, 0.0, 1.5, 0.3, 0.0],
['COLUMBIA', 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
['MIAMI DADE', 2.1, 4.1, 2.3, 0.8, 0.9, 2.6, 5.0],
['DESOTO', 4.3, 1.7, 5.6, 0.0, 0.0, 6.9, 0.0],
['DIXIE', 0.7, 0.0, 4.3, 0.0, 0.0],
['DUVAL', 2.5, 3.5, 2.5, 1.1, 0.0, 2.3, 3.9],
['ESCAMBIA', 0.7, 1.4, 1.3, 0.3, 0.8, 1.0, 0.0],
['FLAGLER', 1.0, 0.7, 1.0, 0.0, 0.0, 0.5, 0.0],
['FRANKLIN', 3.9, 0.0, 0.0, 0.0, 0.0, 0.0],
['GADSDEN', 5.5, 4.7, 6.3, 0.0, 0.0, 0.0, 0.0],
['GILCHRIST', 0.4, 3.6, 0.0, 0.0, 0.0, 0.0],
['GLADES', 1.9, 0.0, 0.0, 0.0, 0.0],
['GULF', 0.4, 1.3, 0.0, 0.0, 0.0, 0.0, 0.0],
['HAMILTON', 1.6, 2.8, 0.0, 0.0, 0.0],
['HARDEE', 4.2, 3.8, 4.8, 0.0, 0.0, 0.0, 0.0],
['HENDRY', 2.1, 3.6, 3.1, 0.0, 0.0, 0.0],
['HERNANDO', 2.4, 4.3, 2.5, 0.8, 3.0, 1.7, 0.0],
['HIGHLANDS', 1.3, 5.1, 3.6, 2.0, 5.6, 1.0, 0.0],
['HILLSBOROUGH', 0.6, 0.8, 0.8, 0.2, 1.0, 0.5, 0.0],
['HOLMES', 1.7, 5.9, 3.4, 0.0, 0.0, 0.0, 0.0],
['INDIAN RIVER', 0.3, 0.3, 1.0, 0.0, 0.0, 0.0, 0.0],
['JACKSON', 0.7, 1.8, 0.0, 0.0, 0.0, 2.6],
['JEFFERSON', 2.6, 0.0, 0.0, 0.0],
['LAFAYETTE', 0.0, 0.0, 3.4, 0.0],
['LAKE', 2.2, 3.3, 2.2, 0.0, 3.0, 1.8, 0.0],
['LEE', 1.7, 1.8, 1.9, 0.2, 1.6, 1.2, 0.0],
['LEON', 0.1, 1.3, 0.2, 0.0, 0.0, 0.0, 0.0],
['LEVY', 1.3, 2.7, 0.0, 0.0, 0.0, 2.1, 0.0],
['LIBERTY', 0.3, 1.2, 0.0, 0.0, 0.0],
['MADISON', 0.3, 1.3, 0.0, 100.0, 0.0, 0.0, 0.0],
['MANATEE', 2.3, 4.8, 5.4, 0.9, 3.2, 2.1, 16.7],
['MARION', 1.4, 1.7, 1.4, 0.0, 0.0, 1.0, 0.0],
['MARTIN', 0.5, 1.4, 1.3, 0.0, 0.0, 0.7, 0.0],
['MONROE', 1.7, 2.2, 2.3, 0.0, 0.0, 3.7, 0.0],
['NASSAU', 0.3, 0.4, 0.0, 0.0, 0.0, 0.8, 0.0],
['OKALOOSA', 1.1, 1.9, 1.6, 0.4, 0.0, 0.9, 0.0],
['OKEECHOBEE', 3.1, 2.8, 0.6, 0.0, 4.8, 0.0, 0.0],
['ORANGE', 0.5, 1.8, 0.7, 0.0, 0.0, 0.5, 0.0],
['OSCEOLA', 0.4, 0.3, 0.4, 0.2, 0.0, 0.2, 0.0],
['PALM BEACH', 2.8, 7.2, 5.0, 1.4, 4.9, 3.7, 5.9],
['PASCO', 0.8, 1.4, 0.7, 0.4, 4.3, 0.7, 0.0],
['PINELLAS', 0.9, 2.5, 1.3, 0.2, 0.7, 1.3, 0.0],
['POLK', 3.3, 4.0, 3.4, 1.0, 2.4, 2.3, 5.4],
['PUTNAM', 2.9, 4.4, 5.3, 0.0, 0.0, 5.2, 0.0],
['ST. JOHNS', 0.7, 1.3, 0.1, 0.0, 0.0, 1.3, 0.0],
['ST. LUCIE', 1.4, 1.7, 1.2, 0.4, 3.8, 0.3, 0.0],
['SANTA ROSA', 0.8, 1.3, 0.6, 0.0, 1.8, 1.4, 0.0],
['SARASOTA', 0.9, 2.1, 1.2, 0.0, 0.0, 1.7, 0.0],
['SEMINOLE', 0.2, 0.6, 0.2, 0.0, 0.0, 0.5, 0.0],
['SUMTER', 2.1, 4.1, 1.8, 0.0, 0.0, 0.0, 0.0],
['SUWANNEE', 0.8, 1.3, 0.9, 0.0, 0.0, 0.0, 0.0],
['TAYLOR', 4.7, 2.5, 5.6, 0.0, 16.7, 0.0],
['63UNION', 0.8, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0],
['VOLUSIA', 0.7, 0.4, 1.0, 0.3, 0.0, 0.3, 0.0],
['WAKULLA', 0.9, 0.8, 2.9, 0.0, 0.0, 0.0, 0.0],
['WALTON', 3.2, 6.2, 6.1, 0.0, 20.0, 3.2, 0.0],
['WASHINGTON', 1.4, 2.6, 0.0, 0.0, 0.0, 0.0, 0.0],
['DEAF/BLIND', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
['WASH. SPECIAL', 0.0, 0.0, 0.0, 0.0],
['FL VIRTUAL', 1.6, 1.0, 3.7, 5.6, 0.0, 1.0, 0.0],
['FAU LAB SCH', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
['FSU CHTR SCH', 0.4, 0.0, 0.0, 0.0, 0.0, 0.0],
['FAMU LAB SCH', 0.0, 0.6, 0.0, 0.0],
['UF LAB SCH', 0.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]

];

var showSel = [];
var showW = 0;


$(document).ready(function(){
	var showB = 46;


 $("input[name='white']").click(function(){
	console.log(fullDropouts[0][0] + " " + fullDropouts[0][1]);
 });

 $("input[name='blackAfro']").click(function(){
	//console.log(fullDropouts[0][0] + " " + fullDropouts[0][2]);
 console.log(showB);
	showB = showB + 1;

	if(showB == 1)
	{
		console.log(showB);
	for (i=0; i < fullDropouts.length; i++)

	{
		console.log(fullDropouts[i][0] + fullDropouts[0][2]);
	}
    }
    else(showB == 2)
    {
    	console.log(showB);
    	showB = 0;
    }
 });
/*
	 $("input[name='blackAfro']").click(function(){
	console.log(fullDropouts[0][0] + " " + fullDropouts[0][2]);

	   )};

	 $("input[name='asian']").click(function(){
	console.log(fullDropouts[0][0] + " " + fullDropouts[0][3]);

	   )};

	 $("input[name='native']").click(function(){
	console.log(fullDropouts[0][0] + " " + fullDropouts[0][4]);

	   )};

	 $("input[name='hispanic']").click(function(){
	console.log(fullDropouts[0][0] + " " + fullDropouts[0][5]);

	   )};


	 $("input[name='pacific']").click(function(){
	console.log(fullDropouts[0][0] + " " + fullDropouts[0][7]);

	   )}; */

//});




/*

14 DESOTO 4.3, 1.7, 5.6, 0.0, 0.0, 6.9, 0.0,
15 DIXIE 0.7, 0.0, 4.3, 0.0, 0.0,
16 DUVAL 2.5, 3.5, 2.5, 1.1, 0.0, 2.3, 3.9,
17 ESCAMBIA 0.7, 1.4, 1.3, 0.3, 0.8, 1.0, 0.0,
18 FLAGLER 1.0, 0.7, 1.0, 0.0, 0.0, 0.5, 0.0,
19 FRANKLIN 3.9, 0.0, 0.0, 0.0, 0.0, 0.0,
20 GADSDEN 5.5, 4.7, 6.3, 0.0, 0.0, 0.0, 0.0,
21 GILCHRIST 0.4, 3.6, 0.0, 0.0, 0.0, 0.0,
22 GLADES 1.9, 0.0, 0.0, 0.0, 0.0,
23 GULF 0.4, 1.3, 0.0, 0.0, 0.0, 0.0, 0.0,
24 HAMILTON 1.6, 2.8, 0.0, 0.0, 0.0,
25 HARDEE 4.2, 3.8, 4.8, 0.0, 0.0, 0.0, 0.0,
26 HENDRY 2.1, 3.6, 3.1, 0.0, 0.0, 0.0,
27 HERNANDO 2.4, 4.3, 2.5, 0.8, 3.0, 1.7, 0.0,
28 HIGHLANDS 1.3, 5.1, 3.6, 2.0, 5.6, 1.0, 0.0,
29 HILLSBOROUGH 0.6, 0.8, 0.8, 0.2, 1.0, 0.5, 0.0,
30 HOLMES 1.7, 5.9, 3.4, 0.0, 0.0, 0.0, 0.0,
31 INDIAN RIVER 0.3, 0.3, 1.0, 0.0, 0.0, 0.0, 0.0,
32 JACKSON 0.7, 1.8, 0.0, 0.0, 0.0, 2.6,
33 JEFFERSON 2.6, 0.0, 0.0, 0.0,
34 LAFAYETTE 0.0, 0.0, 3.4, 0.0,
35 LAKE 2.2, 3.3, 2.2, 0.0, 3.0, 1.8, 0.0,
36 LEE 1.7, 1.8, 1.9, 0.2, 1.6, 1.2, 0.0,
37 LEON 0.1, 1.3, 0.2, 0.0, 0.0, 0.0, 0.0,
38 LEVY 1.3, 2.7, 0.0, 0.0, 0.0, 2.1, 0.0,
39 LIBERTY 0.3, 1.2, 0.0, 0.0, 0.0,
40 MADISON 0.3, 1.3, 0.0, 100.0, 0.0, 0.0, 0.0,
41 MANATEE 2.3, 4.8, 5.4, 0.9, 3.2, 2.1, 16.7,
42 MARION 1.4, 1.7, 1.4, 0.0, 0.0, 1.0, 0.0,
43 MARTIN 0.5, 1.4, 1.3, 0.0, 0.0, 0.7, 0.0,
44 MONROE 1.7, 2.2, 2.3, 0.0, 0.0, 3.7, 0.0,
45 NASSAU 0.3, 0.4, 0.0, 0.0, 0.0, 0.8, 0.0,
46 OKALOOSA 1.1, 1.9, 1.6, 0.4, 0.0, 0.9, 0.0,
47 OKEECHOBEE 3.1, 2.8, 0.6, 0.0, 4.8, 0.0, 0.0,
48 ORANGE 0.5, 1.8, 0.7, 0.0, 0.0, 0.5, 0.0,
49 OSCEOLA 0.4, 0.3, 0.4, 0.2, 0.0, 0.2, 0.0,
50 PALM BEACH 2.8, 7.2, 5.0, 1.4, 4.9, 3.7, 5.9,
51 PASCO 0.8, 1.4, 0.7, 0.4, 4.3, 0.7, 0.0,
52 PINELLAS 0.9, 2.5, 1.3, 0.2, 0.7, 1.3, 0.0,
53 POLK 3.3, 4.0, 3.4, 1.0, 2.4, 2.3, 5.4,
54 PUTNAM 2.9, 4.4, 5.3, 0.0, 0.0, 5.2, 0.0,
55 ST. JOHNS 0.7, 1.3, 0.1, 0.0, 0.0, 1.3, 0.0,
56 ST. LUCIE 1.4, 1.7, 1.2, 0.4, 3.8, 0.3, 0.0,
57 SANTA ROSA 0.8, 1.3, 0.6, 0.0, 1.8, 1.4, 0.0,
58 SARASOTA 0.9, 2.1, 1.2, 0.0, 0.0, 1.7, 0.0,
59 SEMINOLE 0.2, 0.6, 0.2, 0.0, 0.0, 0.5, 0.0,
60 SUMTER 2.1, 4.1, 1.8, 0.0, 0.0, 0.0, 0.0,
61 SUWANNEE 0.8, 1.3, 0.9, 0.0, 0.0, 0.0, 0.0,
62 TAYLOR 4.7, 2.5, 5.6, 0.0, 16.7, 0.0,
63 UNION 0.8, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0,
64 VOLUSIA 0.7, 0.4, 1.0, 0.3, 0.0, 0.3, 0.0,
65 WAKULLA 0.9, 0.8, 2.9, 0.0, 0.0, 0.0, 0.0,
66 WALTON 3.2, 6.2, 6.1, 0.0, 20.0, 3.2, 0.0,
67 WASHINGTON 1.4, 2.6, 0.0, 0.0, 0.0, 0.0, 0.0,
68 DEAF/BLIND 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
69 WASH. SPECIAL 0.0, 0.0, 0.0, 0.0,
71 FL VIRTUAL 1.6, 1.0, 3.7, 5.6, 0.0, 1.0, 0.0,
72 FAU LAB SCH 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
73 FSU CHTR SCH 0.4, 0.0, 0.0, 0.0, 0.0, 0.0,
74 FAMU LAB SCH 0.0, 0.6, 0.0, 0.0,
75 UF LAB SCH 0.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,


*/