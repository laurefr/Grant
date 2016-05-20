//alert("hello world");

// Get the INPUT DATA from a JSON file and update the charts
var data = "fruit.json";
var color1 = "rgba(91, 136, 61, 0.2)"; //green
// var color1 = "rgba(255, 165, 0, 0.2)"; //orange
var color2 = "rgba(247, 242, 90, 0.5)"; //yellow
//document.getElementById("x").innerHTML = "apples";  //modify label
//document.getElementById("y").innerHTML = "bananas";  //modify label
salesfunction();



//ADD EVENT LISTENER
 document.getElementById("source").addEventListener("change", whichchart,false);
//window.addEventListener('load', starter, false);

function whichchart () {
chartchosen = document.getElementById("source").value;
   // alert(chartchosen);
    if (chartchosen === "vegetables"){
        data = "";
        data = "veg.json";
        color1 = "rgba(255, 165, 0, 0.2)";
        color2 = "rgba(247, 242, 90, 0.5)";
        //alert(color1);
        
        salesfunction();
   //     document.getElementById("x").innerHTML = "Carrots";  //modify labels for array
     //   document.getElementById("y").innerHTML = "Spinach";  //modify label
    } else {
    // fruit chart is chosen
        data = "";
        data = "fruit.json";
     
        salesfunction();
      //  document.getElementById("x").innerHTML = "Apples";  //modify label
    //    document.getElementById("y").innerHTML = "Bananas";  //modify label
      
    }

}



// *************************************************** AJAX LOAD JSON DATA

// AJAX request LOAD JSON file function using jQuery
function salesfunction() {
 //   alert("Sales");
//	$.get("sales.json")
	$.get(data)
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
          // alert(data.charLabels);
          
          //Now we want to access individual values in a value that has an array
         //  alert(parseddata.charLabels[0]);
          
		//	updateCharts();

	printtochart();
	drawTable();
		})
		.error(function(jqXHR, textStatus, errorThrown) {
			console.log("error " + textStatus);
			console.log("incoming Text " + jqXHR.responseText);
		});
}




// ***************************************************


 //CHART.JS CONFIGURATION
	Chart.defaults.global.animation = true;
	Chart.defaults.global.animationSteps = 60;
	Chart.defaults.global.responsive = true;

// LINE CHART ***************************************************   
var data = {
	labels: [],
	datasets: [
		{
			//label: "My First dataset",
			fillColor: "rgba(91, 136, 61, 0.2)",
			strokeColor: "rgba(91, 136, 61, 1)",
			pointColor: "rgba(91, 136, 61, 1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(91, 136, 61, 1)",
			data: []
		},
		{
		//	label: "My Second dataset",
			fillColor: "rgba(247, 242, 90, 0.5)",
			strokeColor: "rgba(247, 242, 90, 1)",
			pointColor: "rgba(247, 242, 90, 1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(247, 242, 90, 1)",
			data: []
		}
	]
};

   
//DISPLAY LINE Chart
	var ctx = document.getElementById("chart-area").getContext("2d");
    window.myLineChart = new Chart(ctx).Line(data,{
        responsive:true,
    });


// PIE CHART ***************************************************   
//PIE CHART DATA
  var pieChartData = [{
	//	value: 100,
	//	label: "Test",
//		color: "rgba(91, 136, 61, 0.2)",
		color: color1,
	//	highlight: "#FF5A5E"
	}, {
	//	label: "Test",
	//	value: 100,
//	color: "rgba(247, 242, 90, 0.5)",
	color: color2,
	//	highlight: "#5AD3D1"
	}]
	

//DISPLAY PIE Chart
var ctx1 = document.getElementById("chart-area1").getContext("2d");
var myPieChart = new Chart(ctx1).Pie(pieChartData,{
responsive:true,  
});


function drawTable () {
	$('tbody').empty();
	$('tbody').append('<tr><td></td><th>'+ data.Products[0]+'</th><th>'+data.Products[1]+'</th></tr>');
//	$('form label#x').html(data.Products[0]);
//	$('form label#y').html(data.Products[1]);
	
	for(var i = 0; i < data.Product1.length; i++){
		$('tbody').append('<tr><td>' + data.charLabels[i] + '</td><td>' + data.Product1[i] + '</td><td>' + data.Product2[i] + '</td></tr>')
	};
		
	
}


/* XXXXXXXXXXXX  PRINT TO CHART   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
         
        function printtochart(){
        var piex = 0;
        var piey = 0;
        
       for(var i = 0; i < data.Product1.length; i++){
         
            var x = parseInt(data.Product1[i]);
            var y = parseInt(data.Product2[i]);
            var z = data.charLabels[i];
            
        //    x = x.toFixed(2);
          //  y = y.toFixed(2);
            
         //  alert("x is " + typeof(x));
         //  alert("y is " + y); 
         //  alert("z is " + z);
           //add data to Line chart
          myLineChart.addData([x,y],z);
        
     
        //Total Product 1 for Pie Chart
        piex = (piex + x);
        piey = (piey + y);
       
        }
        // Average the Total of Products1
        piex = piex/data.Product1.length;
        piey = piey/data.Product1.length;
   //     alert(piex + " " + piey);
        
        myPieChart.segments[0].label = data.Products[0];
        myPieChart.segments[0].value = Math.ceil(piex); //round up
 
        myPieChart.segments[1].label = data.Products[1];
//        myPieChart.segments[1].value = Math.round(piey * 100) / 100; //round to 2 decimals
        myPieChart.segments[1].value = Math.floor(piey); //round to 2 decimals
   
        myPieChart.update();
           
        }















 
