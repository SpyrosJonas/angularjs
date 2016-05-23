(function() {
	var OrdersController = function($scope, $routeParams, customersFactory, appSettings){
		 var customerId = parseInt($routeParams.customerId);		 
         //$scope.orders = null;
         $scope.customer= null;
         $scope.appSettings = appSettings;
         function init() {
            customersFactory.getCustomer(customerId)
              .success (function(customer){
                 $scope.customer = customer;
              })
              .error(function(data, status, headers, config){
                //handle error
              });
           //$scope.customer=customersFactory.getCustomer(customerId);


       }
          // $scope.customers = [
          //         {id:1,joined: '2000-12-02', name:   'Marron5',city:   'New York',    anOrder: 1500, 
          //         orders:[{  id:1, product:'Shoes',total: 9.9956 }]
          //         },
          //         {id:2,joined:'1965-01-25', name:  'Zed',    city:   'Las Vegas',   anOrder: 19.99,
          //           orders: [{id: 1,product: 'Shorts',total: 55},{id: 2,product: 'T-Shirt',total: 85},{id: 3,product: 'Running Glasses',total: 300}]
          //         },
          //         {id:3,joined:'1944-06-15', name:'Tina',   city:'Seatle',anOrder:101.5, 
          //           orders: [{id: 1,product: 'Shorts',total: 55},{id: 2,product: 'T-Shirt',total: 85},{id: 3,product: 'Running Glasses',total: 300}]
          //         },
          //         {id:4,joined:'1995-03-28', name:'Dave',   city:'Los Angeles', anOrder:44.99, 
          //           orders: [{id: 1,product: 'Shorts',total: 55},{id: 2,product: 'T-Shirt',total: 85},{id: 3,product: 'Running Glasses',total: 300}]
          //         }
          //         ];
          
          // function init(){
          //   	for (var i=0 ; i < $scope.customers.length ;  i++){
          //   		if ($scope.customers[i].id === parseInt(customerId)){
          //  				$scope.orders = $scope.customers[i].orders;          
          //           	break;  		
          //       	}
          //   	}
          //   }
          init();
         //  $scope.customers.forEach(function(customer){
         //  	if (customer.id === parseInt(customerId)){
         //   	    $scope.orders = customer.orders;                     		
         //     }
         // });

         // init();     
}
	OrdersController.$inject =['$scope', '$routeParams', 'customersFactory'];

   angular.module('customersApp')
        .controller('OrdersController',OrdersController);
}());

//console.log('controllerFound-Orders');