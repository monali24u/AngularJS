
var app = angular.module("myApp", []);

app.controller('viewCntl', function($scope, $http){

  $http.get("/countries.json")
  .then(function(response) {
    console.log("come here!!");
      $scope.countiresData = response.data;
  });

});
