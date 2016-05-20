	
//BUTTON EVENT LISTENER when click runs the main function 
var e2 = document.getElementById('calcinterestbtn');
 // invoke main function when button 2 is clicked
 e2.addEventListener('click',validateform,false);
		
		

//SIMPLE VALIDATION FORM
function validateform(){
    var k = document.getElementById("input1").value;
    var l = document.getElementById("input2").value;
    var m = document.getElementById("input3").value;
    
   // alert(k);
   if(k === null || k === "" || l === null || l === "" || m === null || m === ""){
    alert("You must enter values in all three fields");
    // document.getElementById("input1").value = ;
   } else {
       //number values are in all three inputs so proceed to main function
       main();
   }
} 
		

//MAIN function 
 function main(){
 
//CALCULATE – this invokes the function summit, takes in 3 arguments (real values) from user input,   
calcinterest(parseInt(input1.value), parseInt(input2.value), parseInt(input3.value));	


//alert(monthlyinterest);
//alert(totalinterest);

//FORMAT THE NUMBER
monthlyinterest = numberWithCommas(monthlyinterest);
totalinterest = numberWithCommas(totalinterest);

//CAll DISPLAY IT
//alert(monthlyinterest);
//alert(totalinterest);
displayit();

}	


   
      
  	




//CALC INTEREST 
function calcinterest(loanamount, interestrate , term){
    //alert("Calc interest"); GLOBAL VARIABLES
	monthlyinterest = loanamount * ((interestrate/100)/12);
	totalinterest = monthlyinterest * (term*12);
	  //    alert(monthlyinterest + " , " + totalinterest);
}


//FORMAT NUMBERS
function numberWithCommas(x) {
//format to 2 decimal places - nb: this changes the variable from number to string
//alert(typeof(x));
//alert (x);
x = x.toFixed(2);
//now insert commas

return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
	
	
	     
//DISPLAY IT
function displayit(){
//display on webpage 
document.getElementById("monthlypaymentheader").innerHTML = "Interest only calculation";
document.getElementById("monthlypaymentresult").innerHTML = "Your monthly repayment will be <b>£ " + monthlyinterest + "</b>" ;
document.getElementById("moneyimage").innerHTML = "<img src='coin.png'>";
document.getElementById("totalinterestpaymentresult").innerHTML = "The total interest you will pay: <b>£" + totalinterest + "</b>";


        }		
