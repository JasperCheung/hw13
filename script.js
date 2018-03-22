//Team jackSmith
//Caleb Smith-Salzberg, Jasper Cheung
//SoftDev2 pd7
//K #13: Scattered
//2018-03-20

var svg = document.getElementById("svg");
var year = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];
var numrob = [32562, 28202, 27229, 25989, 24373, 24722, 23739, 21809, 22401, 18601, 19486, 19717, 20144, 19128, 16539, 16931, 15500, 13956];
var data = [];
var yAxe = [];

//fills the data
var fillData = function(){
    for( var i = 0; i < year.length; i++){
	data[i] = [year[i],numrob[i]];
    }

	for( i = 12; i < 34; i++){
	yAxe[i-12] = [[i * 1000]];
    }
};
//ughhhh		  		  		   	
var labels = function(){
    //this one is the data
    var labels = d3.select("svg").selectAll("text").data(data).enter();
    //this one is y axis range
    var yAxis = d3.select("svg").selectAll("text").data(yAxe).enter();
    labels.append("text")//x-axis
	.attr("x", function(d) { return 55 * (d[0] - 2000) + 30 + 50 })
	.attr("y", 550)
	.text(function(d) { return d[0]; });
    yAxis.append("text")//y-axis im confused
	.attr("x", 30)
    //so like i is index
	.attr("y", function(d, i){ return 530 - ( 24 * i) })
	.text(function(d,i) {
	    console.log(yAxe);
	    return d[0];
	});
    labels.append("text")
	.attr("x", 0)
	.attr("y", 300)
	.text("# of Robberies");
    labels.append("text")
	.attr("x", 490)
	.attr("y", 600)
	.text("Year");

};
   
//fills the plot
var fillPlot = function(){
    var points = d3.select("svg").selectAll("circle").data(data).enter();
    points.append("circle")
	.attr("cx", function(d) { return 55 * ( d[0] - 2000) + 80})
        //scaling the data
	.attr("cy", function(d) { return 530 - ( ( ( d[1] - 12000 ) / 1000) * 24)})
	.attr("r",10)
	.attr("fill", "red")
    //svg.append(points); don't need right?
};
fillData();
labels();
fillPlot();
