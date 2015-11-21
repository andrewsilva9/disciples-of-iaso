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
		
    $scope.labelA = $scope.formData.practitionerA.name;
    $scope.labelB = $scope.formData.practitionerB.name;
    $scope.comparisonTitle = "Gaps in " + $scope.labelA + " vs. " + $scope.labelB + " concerning " + $scope.formData.comparison.name;

    drawNewCharts();

		//Make http call for new data. set $scope.line.data to new lines.
		//set scope.series to appropriate labels.
		//we'll need $scope.bar.data too possibly
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
  [[65, 59, 80, 81, 56, 55, 40], [50, 75, 90, 94, 85, 70, 75], [80, 85, 83, 77, 78, 70, 84], [90, 95, 93, 87, 88, 90, 94], [68, 75, 70, 74, 85, 70, 75]],
  [[65, 59, 80, 81, 56, 55, 40], [50, 75, 90, 94, 85, 70, 75], [80, 85, 83, 77, 78, 70, 84], [90, 95, 93, 87, 88, 90, 94], [68, 75, 70, 74, 85, 70, 75]],
  [[65, 59, 80, 81, 56, 55, 40], [50, 75, 90, 94, 85, 70, 75], [80, 85, 83, 77, 78, 70, 84], [90, 95, 93, 87, 88, 90, 94], [68, 75, 70, 74, 85, 70, 75]]];
    
    
}]);