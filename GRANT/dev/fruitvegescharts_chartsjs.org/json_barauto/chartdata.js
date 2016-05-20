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






/* XXXXXXXXXXXX  LOAD DATA AUTOMATICALY WITH PAGE LOAD   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

Javascript cannot typically access local files in new browsers but the XMLHttpRequest object can be used to read files. So it is actually Ajax (and not Javascript) which is reading the file.

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
    salesfunction();
  }
};
xmlhttp.open("GET","test.csv",true);
xmlhttp.send();

 */
 salesfunction();
 var data = "";
 
// AJAX request LOAD JSON file function using jQuery
function salesfunction() {
    alert("Sales");
	$.get("sales.json")
		.done(function(d) {
			data1 = d;
			console.log("JSON file loaded");
			
			//This is the JSON data loaded from the file. 
			//It is loaded as a STRING 
			//alert("JSON data is" + data);
			//alert(typeof(data));
			
		   //Now we parse the JSON string as individual OBJECTS
		   //DO NOT declare var so the variable has GLOBAL scope
           data = JSON.parse(data1);
           
           //Now we can access individual values using the object name/value notation
          // alert(data.Product1.length);
          // alert(parseddata.Type);
          // alert(parseddata.Product1);
          // alert(parseddata.charLabels);
          
          //Now we want to access individual values in a value that has an array
           //alert(parseddata.charLabels[0]);
          
		//	updateCharts();
	//		drawTable();

	printtochart();


		})
		.error(function(jqXHR, textStatus, errorThrown) {
			console.log("error " + textStatus);
			console.log("incoming Text " + jqXHR.responseText);
		});
}



/* XXXXXXXXXXXX  PRINT TO CHART   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
         
        function printtochart(){
            
        
       for(var i = 0; i < data.Product1.length; i++){
         
            var x = parseInt(data.Product1[i]);
            var y = parseInt(data.Product2[i]);
             var z = data.charLabels[i];
            
         //  alert("x is " + typeof(x));
         //  alert("y is " + y); 
         //  alert("z is " + z);
           //add data to chart
           myBar.addData([x,y],z);
      
        }
         }





