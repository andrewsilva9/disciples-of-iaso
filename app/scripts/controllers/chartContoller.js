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
  		{name : "Diabetes / HBA1C"},
  		{name : "Athsma / Checkups"},
  		{name : "Condition1 / Test1"},
  		{name : "Condition5 / Test5"},
  		{name : "Condition4 / Test4"},
  		{name : "Condition3 / Test3"},
  		{name : "Condition2 / Test2"}
  		];
  	$scope.formData.comparison = $scope.formData.comparisonOptions[0];
  	
  	$scope.formData.practitionerList = [
  		{name : "Physician A"},
  		{name : "Physician B"},
  		{name : "Practice A"},
  		{name : "Practice B"},
  		{name : "Georgia Average"},
  		{name : "California Average"}
  	];
  	
  	$scope.formData.practitionerA = $scope.formData.practitionerList[0];
  	$scope.formData.practitionerB = $scope.formData.practitionerList[1];
  	
  	
  	$scope.formData.dtStart = new Date();
  	$scope.formData.dtEnd = new Date();
  	
  	$scope.statusDtStart = {};
  	$scope.statusDtEnd = {}
  	$scope.openStart = function($event) {
    	$scope.statusDtStart.opened = true;
  	};
  	$scope.openEnd = function($event){
  		$scope.statusDtEnd.opened = true;
  	};

	$scope.downloadData = function(){
		console.log($scope.formData);
	};
  	
    $scope.line = {
	    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	    series: ['Series A', 'Series B'],
	    data: [
	      [65, 59, 80, 81, 56, 55, 40],
	      [28, 48, 40, 19, 86, 27, 90]
	    ],
	    onClick: function (points, evt) {
	      console.log(points, evt);
	    }
    };

    $scope.bar = {
	    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
		series: ['Series A', 'Series B'],

		data: [
		   [65, 59, 80, 81, 56, 55, 40],
		   [28, 48, 40, 19, 86, 27, 90]
		]
    	
    };

   //  $scope.donut = {
//     	labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
//     	data: [300, 500, 100]
//     };
// 
//     $scope.radar = {
//     	labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
// 
//     	data:[
//     	    [65, 59, 90, 81, 56, 55, 40],
//     	    [28, 48, 40, 19, 96, 27, 100]
//     	]
//     };
// 
//     $scope.pie = {
//     	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
//     	data : [300, 500, 100]
//     };
// 
//     $scope.polar = {
//     	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
//     	data : [300, 500, 100, 40, 120]
//     };
// 
//     $scope.dynamic = {
//     	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
//     	data : [300, 500, 100, 40, 120],
//     	type : 'PolarArea',
// 
//     	toggle : function () 
//     	{
//     		this.type = this.type === 'PolarArea' ?
//     	    'Pie' : 'PolarArea';
// 		}
//     };
    
    
}]);