
// function for results table and pie chart
function calculate()
{
  var grossSalary = parseInt(document.getElementById("num1").value);
  var allowance = 10600;
  var taxable;
  var incomeTax;  
  var insurance;
  var deductions;
  var finalSalary;
    
  if (grossSalary <= 7956)
    {
      document.getElementById("gross").value = grossSalary;
      document.getElementById("allowance").value = allowance.toFixed(2);
      
      taxable = 0;
      document.getElementById("taxable").value = taxable.toFixed(2);
      
      incomeTax = 0;
      document.getElementById("incomeTax").value = incomeTax.toFixed(2);
      
      insurance = 0;
      document.getElementById("insurance").value = insurance.toFixed(2);
      
      deductions = incomeTax + insurance;
      document.getElementById("deductions").value = deductions.toFixed(2);      
        
      finalSalary = grossSalary - deductions;
      document.getElementById("finalSalary").value = finalSalary.toFixed(2);  
    }
  
  else if (grossSalary <= 10600)
      {
      document.getElementById("gross").value = grossSalary;
      document.getElementById("allowance").value = allowance.toFixed(2);
      
      taxable = 0;
      document.getElementById("taxable").value = taxable.toFixed(2);
      
      incomeTax = 0;
      document.getElementById("incomeTax").value = incomeTax.toFixed(2);
      
      insurance = (grossSalary - 8060) * 0.12;
      document.getElementById("insurance").value = insurance.toFixed(2);
      
      deductions = incomeTax + insurance;
      document.getElementById("deductions").value = deductions.toFixed(2);      
        
      finalSalary = grossSalary - deductions;
      document.getElementById("finalSalary").value = finalSalary.toFixed(2);  
    }
  
  else if (grossSalary <= 31785)
    {
      document.getElementById("gross").value = grossSalary;
      document.getElementById("allowance").value = allowance.toFixed(2);
      
      taxable = grossSalary - 10600;
      document.getElementById("taxable").value = taxable.toFixed(2);
      
      incomeTax = 0.2 * taxable;
      document.getElementById("incomeTax").value = incomeTax.toFixed(2);
      
      insurance = (grossSalary - 8060) * 0.12;
      document.getElementById("insurance").value = insurance.toFixed(2);
      
      deductions = incomeTax + insurance;
      document.getElementById("deductions").value = deductions.toFixed(2);      
        
      finalSalary = grossSalary - deductions;
      document.getElementById("finalSalary").value = finalSalary.toFixed(2);  
    }
  
  else if (grossSalary > 31785)
    {
      document.getElementById("gross").value = grossSalary;
      document.getElementById("allowance").value = allowance.toFixed(2);
      
      taxable = grossSalary - 10600;
      document.getElementById("taxable").value = taxable.toFixed(2);
      
      incomeTax = ((0.4*(taxable - 31785)) + (0.2 * 31785));
      document.getElementById("incomeTax").value = incomeTax.toFixed(2);
      
      insurance = (0.02*(grossSalary - 42380)) + 4118.40;
      document.getElementById("insurance").value = insurance.toFixed(2);
      
      deductions = incomeTax + insurance;
      document.getElementById("deductions").value = deductions.toFixed(2);      
        
      finalSalary = grossSalary - deductions;
      document.getElementById("finalSalary").value = finalSalary.toFixed(2);      
    }
  
  // code for pie chart
  var chart = new CanvasJS.Chart("chart-container", {
    /*
    title: {
      text: "Results:",
			dockInsidePlotArea: true,
      fontSize: 30,
      padding: 50,
    },
    */
    animationEnabled: true,
    backgroundColor: "#Eff5f5",   
    data: [{
      type: 'pie',
      indexLabelPlacement: "auto",
      indexLabelFontColor: "black",       
      yValueFormatString:"Â£###,###,###.00",
      dataPoints: [{
        label: "Income Tax",
        y: incomeTax,
        color: "rgb(179, 134, 0)"
      }, {
        label: "National Insurance",
        y: insurance,
        color: "rgb(129, 67, 116)"
      }, {
        label: "Take-home salary",
        y: finalSalary,
        color : "rgb(81, 163, 157)",
      }],
    }],
  });
  chart.render();
};