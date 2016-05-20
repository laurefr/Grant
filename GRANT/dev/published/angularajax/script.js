// HTTP AJAX ASYNCHRONOUS

var MainController = function($scope, $http){
  
 var onUserComplete = function(response){
    $scope.user = response.data;
    //server will return data in json format
  }
  
  //AJAX HTTP SERVICE REQUEST FOR DATA
  $http.get("https://api.github.com/users/grantswart")
  //SEND request for the data
  //Webserver will send data back in JSON format
  //Angular automatically deserializes the JSON data into a Javascript Object
  .then(onUserComplete);
  

};