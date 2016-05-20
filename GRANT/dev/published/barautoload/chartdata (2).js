/* XXXXXXXXXXXX PRESENT CHART XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */

	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

	var barChartData = {
		// labels : ["January","February","March","April","May","June","July"],
		labels : [],
		
		datasets : [
			{
				fillColor : "rgba(122, 122, 122, 1)",
				strokeColor : "rgba(220,220,220,0.6)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				//data :  [32,42,52,23,3,34,55]
				data : []
			},
			{
				fillColor : "rgba(98,80,158,0.5)",
				strokeColor : "rgba(98,80,158,0.7)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				//data : [32,42,52,23,3,34,55]
				data : []
			},
			
			{
				fillColor : "rgba(95,158,160,0.5)",
				strokeColor : "rgba(95,158,160,0.7)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data : [32,42,52,23,3,34,55]
			}
		]

	}
	
/* XXXXXXXXXX   CREATE CHART ON PAGE LOAD XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */

	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true,
			barStrokeWidth : 1,
			barValueSpacing : 1,
		    scaleShowLabels: true
		});
		
	}
    
/* XXXXXXXXXX   ADD DATA MANUALLY XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */


function loaddata(x,y,z){
myBar.addData([x,y],z);
}

function removedata(){
myBar.removeData();
}

function test(){
alert("Hi");
window.myBar.addata([22,60],"boo");
}






/* XXXXXXXXXXXX  LOAD DATA AUTOMATICALY WITH PAGE LOAD   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */
/*
Javascript cannot typically access local files in new browsers but the XMLHttpRequest object can be used to read files. So it is actually Ajax (and not Javascript) which is reading the file.
*/
var contents = '';
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
    contents = xmlhttp.responseText;

   // alert(contents);
    
    //CREATE LOCAL ARRAY split on the comma GLOBAL VARIABLE CSV file
    myarray = contents.split(',');
    
    //CALL PRINT TO CHART
    printtochart();
    
  }
};
xmlhttp.open("GET","test.csv",true);
xmlhttp.send();



/* XXXXXXXXXXXX  PRINT TO CHART   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */
         
        function printtochart(){
        var printThis = "";
        var counter = 0;  // local counter to get 3 array elements for adding to chart data
        
       for(var i = 0; i < myarray.length; i++){
         
        //LOOP ARRAY 3 ITEMS AT A TIME and ADD TO CHART - RESET LOCAL COUNTER
        if(counter < 3) {
        //alert(counter);
        // ADD TO LOCAL FUNCTION VARIABLES
        if (counter === 0){
            var x = parseInt(myarray[i]);
           //alert(typeof(x)); 
        }
       else if (counter === 1) {
           var y = parseInt(myarray[i]);
         // alert(y); 
       }
       else {
            //COUNTER NOW AT 2
            var z = myarray[i];
            // alert(z);
            //ADD DATA TO BAR CHART
            myBar.addData([x,y],z);
            //RESET COUNTER 
            counter = -1;
       }
       
       
         }
       // alert("add to array");
        counter++;
         }
     
         }

