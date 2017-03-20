
var app = angular.module("myApp", []);

app.controller('viewCntl', function($scope, $http){

  //ajax request
  $http.get("/countries.json")
  .then(function(response) {
    console.log("come here!!");
      $scope.countiresData = response.data;
  });

});

app.controller('secondCntl', function($scope){

  $scope.clicked = false;

  $scope.showList = function(){
    if($scope.clicked == false){
      $scope.clicked = true;
    }
    else{
      $scope.clicked = false;
    }
  }

});
