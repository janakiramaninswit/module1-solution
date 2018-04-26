(function(){

	'use strict'

	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject=["$scope"];

	var LunchCheckController = function($scope){

		var lunchCheckController = this;

		lunchCheckController.items = "";
		lunchCheckController.borderColor = "";
		lunchCheckController.fontColor = "";
		lunchCheckController.calculate = function(){
			if(!items){
				lunchCheckController.message = "Please enter data firs";
				lunchCheckController.borderColor = "red";
				lunchCheckController.fontColor = "red";
			}else{
				lunchCheckController.borderColor = "green";
				lunchCheckController.fontColor = "green";
				itemArr = items.spilt(",");

				if(itemArr.length <= 3){
					lunchCheckController.message = "Enjoy!";
				}else{
					lunchCheckController.message = "Too much!";
				}
			}
		}
	}

})();