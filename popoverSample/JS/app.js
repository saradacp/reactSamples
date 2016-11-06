var myApp = angular.module('myApp',['ngAnimate', 'ui.bootstrap']);

myApp.controller('myCtrl',['$scope','$http',function($scope,$http) {

	$scope.itemList={};
	$scope.checkBox = {
       show : false,
       create : false,
	};

	$scope.successMsg = {    
	    templateUrl: 'success.html'    
	};     

	$scope.showAction = function() {

		if($scope.checkBox.show) {
 			$scope.list = {    
	    		templateUrl: 'new.html'    
	  		};                               
		} else {
			$scope.list = {    
	    		templateUrl: 'createNewList.html'    
	  	    };
        }
 	}

    $scope.shoppingList = [
        {
            "listName": "Donuts",
            "listCount": "12",
            "listType": "S"
        },
        {
            "listName": "Cheese",
            "listCount": "10",
            "listType": "S"
        },
        {
            "listName": "Milk",
            "listCount": "1",
            "listType": "S"
        },
        {
            "listName": "Cilantro",
            "listCount": "15",
            "listType": "S"
        },
        {
            "listName": "Garlic",
            "listCount": "2",
            "listType": "S"
        },
        {
            "listName": "Eggs",
            "listCount": "11",
            "listType": "P"
        },
        {
            "listName": "Bread",
            "listCount": "12",
            "listType": "P"
        },
        {
            "listName": "Pizza",
            "listCount": "10",
            "listType": "P"
        },
        {
            "listName": "Bagels",
            "listCount": "12",
            "listType": "P"
        }
    
    ]
		 
}

])