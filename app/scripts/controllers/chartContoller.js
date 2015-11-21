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
  
  	$scope.formData = {};
  	
  	$scope.formData.comparisonOptions = [
  		{name : "Diabetes / HBA1C", id : 0},
  		{name : "Athsma / Checkups", id : 1},
  		{name : "Hypertension / Regulation", id : 2},
  		{name : "Heart Disease / Exercise", id : 3}
  		];
  	$scope.formData.comparison = $scope.formData.comparisonOptions[0];
  	
  	$scope.formData.practitionerList = [
  		{name : "North Georgia", id : 0},
  		{name : "South Georgia", id : 1},
  		{name : "Atlanta Area (ITP)", id : 2},
  		{name : "Atlanta Area (OTP)", id : 3},
  		{name : "Georgia Statewide", id : 4}
  	];
  	
  	$scope.formData.practitionerA = $scope.formData.practitionerList[0];
  	$scope.formData.practitionerB = $scope.formData.practitionerList[1];

	$scope.getNewData = function(){
		
    //set scope.series to appropriate labels.
    $scope.labelA = $scope.formData.practitionerA.name;
    $scope.labelB = $scope.formData.practitionerB.name;
    //create title for charts
    $scope.comparisonTitle = "Gaps in " + $scope.labelA + " vs. " + $scope.labelB + " concerning " + $scope.formData.comparison.name;
    //draw charts
    drawNewCharts();

		//Make http call for new data
	}

	$scope.downloadData = function(){
		console.log($scope.line.data );
	};
  	
  function drawNewCharts(){
    $scope.line = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      series: [$scope.labelA, $scope.labelB],
      data: [
        data3D[$scope.formData.comparison.id][$scope.formData.practitionerA.id],
        data3D[$scope.formData.comparison.id][$scope.formData.practitionerB.id]
      ],
      onClick: function (points, evt) {
        console.log(points, evt);
      }
    };
    $scope.bar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      series: [$scope.labelA, $scope.labelB],
      data: [
        data3D[$scope.formData.comparison.id][$scope.formData.practitionerA.id],
        data3D[$scope.formData.comparison.id][$scope.formData.practitionerB.id]
      ]  
      };
  }

  var data3D = [[[65, 59, 80, 81, 56, 55, 40], [50, 75, 90, 94, 85, 70, 75], [80, 85, 83, 77, 78, 70, 84], [90, 95, 93, 87, 88, 90, 94], [68, 75, 70, 74, 85, 70, 75]],
  [[55, 70, 75, 74, 68, 69, 74], [60, 70, 80, 76, 74, 70, 66], [70, 75, 73, 77, 78, 70, 74], [87, 85, 89, 92, 95, 97, 94], [64, 62, 60, 54, 60, 66, 70]],
  [[63, 69, 71, 73, 67, 67, 76], [62, 72, 83, 80, 85, 88, 92], [73, 75, 73, 70, 70, 73, 74], [86, 84, 90, 87, 88, 89, 84], [77, 70, 64, 60, 70, 75, 80]],
  [[73, 61, 81, 82, 72, 70, 80], [80, 75, 84, 88, 85, 88, 85], [77, 75, 73, 68, 64, 60, 64], [88, 93, 92, 96, 92, 90, 88], [60, 50, 45, 55, 68, 70, 73]]];
    
    
}]);