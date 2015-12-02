'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {

    //initialization stuff start
    $scope.formData = {};
    
    $scope.formData.comparisonOptions = [
      {name : "Hypertension", id : 0},
      {name : "Chronic Obstructive Pulminary Disease", id : 1},
      {name : "Congestive Heart Failure", id : 2},
      {name : "Diabetes", id : 3},
      ];
    $scope.formData.comparison = $scope.formData.comparisonOptions[0];
    
    $scope.formData.practitionerList = [
      {name : "Provider 1", id : 1},
      {name : "Provider 2", id : 2},
      {name : "Provider 3", id : 3},
      {name : "Provider 4", id : 4},
      {name : "Provider 5", id : 5},
      {name : "Provider 6", id : 6},
      {name : "Georgia Average", id: -1}
    ];
    
    $scope.formData.practitionerA = $scope.formData.practitionerList[0];
    $scope.formData.practitionerB = $scope.formData.practitionerList[1];

    var chartDataA = [0, 0, 0, 0, 0];
    var chartDataB = [0, 0, 0, 0, 0];
    $scope.badDataA = false;
    $scope.badDataB = false;

    //initialization stuff end

  $scope.getNewData = function(){
    
    //set scope.series to appropriate labels.
    $scope.labelA = $scope.formData.practitionerA.name;
    $scope.labelB = $scope.formData.practitionerB.name;
    //create title for charts
    $scope.comparisonTitle = 'Gaps in ' + $scope.labelA + ' vs. ' + $scope.labelB + ' concerning ' + $scope.formData.comparison.name;

    //make HTTP GET for chart data A
    $http.get('http://gtcs.japtem.com/api/resource?gap=' + $scope.formData.comparison.id + '&provider=' + $scope.formData.practitionerA.id)
    .then(function successCallback(response){
      //if no data, set to 0s
      if(response.data.results.length < 5 || angular.equals(response.data.results, [0, 0, 0, 0, 0])){
        chartDataA = [0, 0, 0, 0, 0];
        $scope.badDataA = true;
      }
      else{
        chartDataA = response.data.results;
        $scope.badDataA = false;
      }

      //this should be cleaner, right now it's just brute force redrawing every time there's any new data
      drawNewCharts();

    }, function errorCallback(response){
      console.log(response);
    });

    $http.get('http://gtcs.japtem.com/api/resource?gap=' + $scope.formData.comparison.id + '&provider=' + $scope.formData.practitionerB.id)
    .then(function successCallback(response){
      //same as above but with data B
      if(response.data.results.length < 5 || angular.equals(response.data.results, [0, 0, 0, 0, 0])){
        chartDataB = [0, 0, 0, 0, 0];
        $scope.badDataB = true;
      }
      else{
        chartDataB = response.data.results;
        $scope.badDataB = false;
      }

      drawNewCharts();
      
    }, function errorCallback(response){
      console.log(response);
    });
  }

      //no download right now
  // $scope.downloadData = function(){
  //   console.log($scope.line.data );
  // };
    
  function drawNewCharts(){
    //logs to see data in the console
    console.log('A: ' + chartDataA);
    console.log('B: ' + chartDataB);
    //draw the charts
    $scope.line = {
      labels: ['2010', '2011', '2012', '2013', '2014'],
      series: [$scope.labelA, $scope.labelB],
      data: [chartDataA, chartDataB]
    };
    $scope.bar = {
      labels: ['2010', '2011', '2012', '2013', '2014'],
      series: [$scope.labelA, $scope.labelB],
      data: [chartDataA, chartDataB]  
      };
  }
    
}]);