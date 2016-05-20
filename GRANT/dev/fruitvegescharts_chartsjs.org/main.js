//alert("hello world");

// Get the INPUT DATA from a JSON file and update the charts
var data = "fruit.json";
var color1 = "rgba(91, 136, 61, 0.2)"; //green
var color2 = "rgba(247, 242, 90, 0.5)"; //yellow

 ajaxcall();



//ADD EVENT LISTENER
 document.getElementById("source").addEventListener("change", whichchart,false);

function whichchart () {
chartchosen = document.getElementById("source").value;
    if (chartchosen === "vegetables"){
        
        data = "veg.json";
        color1 = "rgba(255, 165, 0, 0.2)";
        color2 = "rgba(247, 242, 90, 0.5)";
       ajaxcall();
    } else {
    // fruit chart is chosen
        data = "";
        data = "fruit.json";
        ajaxcall();
    }

}

function ajaxcall () {
/* Javascript AJAX REQUEST TO JSON FILE */

// function salesfunction() {
  //  alert(data);
    data1 ="";
    
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      data1 = xhttp.responseText;
     // alert(data1);
      data = JSON.parse(data1);
     alert(data.Product1[0]);
     alert(data.Product1.length);
     
       //ADD NEW LINE CHART DATA
       for(var i = 0; i < data.Product1.length; i++){
            var x = parseInt(data.Product1[i]);
            var y = parseInt(data.Product2[i]);
            var z = data.charLabels[i];
          myLineChart.addData([x,y],z);
        }
        
        //REMOVE OLD LINE CHART DATA
        if (chartchosen === "vegetables"){
         for(var i = 0; i < data.Product1.length; i++){
          myLineChart.removeData();
        } 
        }



        //PIE CHART DATA
         var piex = 0;
        var piey = 0;
         //Total Product 1 for Pie Chart
        piex = (piex + x);
        piey = (piey + y);
       
        
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
 

 
 /* AJAX REQUEST END ******************************************************  */
    }
  };
  xhttp.open("GET", data, true);
  xhttp.send();
}  


       
    
/*  DRAW CHARTS START **********************************  */


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
		color: color1,
	}, {
	color: color2,
	}]
	

//DISPLAY PIE Chart
var ctx1 = document.getElementById("chart-area1").getContext("2d");
var myPieChart = new Chart(ctx1).Pie(pieChartData,{
responsive:true,  
});



	$('tbody').empty();
	$('tbody').append('<tr><td></td><th>'+ data.Products[0]+'</th><th>'+data.Products[1]+'</th></tr>');

	for(var i = 0; i < data.Product1.length; i++){
		$('tbody').append('<tr><td>' + data.charLabels[i] + '</td><td>' + data.Product1[i] + '</td><td>' + data.Product2[i] + '</td></tr>')
	};
		
/*  DRAW CHARTS END **********************************  */


	


















 

  



  