(function(){

	'use strict'

	angular.module("LunchCheck", [])
		.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ["$scope"];

	function LunchCheckController($scope){

		$scope.items = "";
		$scope.borderColor = "";
		$scope.fontColor = "";

		$scope.calculate = function(){

			if(!$scope.items){

				$scope.message = "Please enter data first";
				$scope.borderColor = "2px solid red";
				$scope.fontColor = "red";

			}else{

				$scope.borderColor = "2px solid green";
				$scope.fontColor = "green";

				var itemArr = $scope.items.split(",");

				if(itemArr.length <= 3){

					$scope.message = "Enjoy!";

				}else{

					$scope.message = "Too much!";
				}
			}
		}
	}

})();