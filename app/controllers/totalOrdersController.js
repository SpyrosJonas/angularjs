(function () {
	var totalOrdersController = function ($scope, $log, customersFactory, appSettings) {
		$scope.sortBy  = 'product';
        $scope.reverse = false;
		$scope.orders = null;
		$scope.ordersTotal = 0.0;
		$scope.totalType;
		$scope.appSettings=appSettings;
        
        function init() {
            customersFactory.getOrders()
            	.success (function(orders){
            		$scope.orders = orders;
            		getOrdersTotal();
            	}) 
            	.error(function(data,status,header,config){
            		//deal with error
            	})
        }

        function getOrdersTotal(){
			var total = 0;
			for (var i=0, len=$scope.orders.length; i<len; i++){
				total += $scope.orders[i].total;
			}
			$scope.ordersTotal = total;

			if ($scope.ordersTotal > 100) {
				$scope.totalType = appSettings.success	;
			}else{
				$scope.totalType = appSettings.failure	;
			}

			//$scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        } 	

        $scope.doSort= function (byParameter){
        	$scope.sortby = byParameter;
        	$scope.reverse = ! $scope.reverse;
        }

        init();
	};

	totalOrdersController.$inject =['$scope','$log','customersFactory','appSettings'];

	angular.module('customersApp')
        .controller('totalOrdersController',totalOrdersController);
}())