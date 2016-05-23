//Option 1

/*app.controller('CustomersController', function  ($scope) {
             $scope.sortBy  = 'name';
             $scope.reverse = false;
             $scope.customers = [
                  {joined:'2000-12-02', name:'John',city:'New York',   anOrder:1500},
                  {joined:'1965-01-25', name:'Zed', city:'Las Vegas',  anOrder:19.99},
                  {joined:'1944-06-15', name:'Tina',city:'Seatle',     anOrder:101.5},
                  {joined:'1995-03-28', name:'Dave',city:'Los Angeles',anOrder:44.99}
                  ];
            $scope.doSort = function (propName)    {
                $scope.sortBy  = propName;
                $scope.reverse = !$scope.reverse;
            };
         });
*/

//export.module= 
//Option 2
//(function () {
//angular.module('customersApp')
//    .controller('CustomersController', function  ($scope) {
//             $scope.sortBy  = 'name';
//             $scope.reverse = false;
//             $scope.customers = [
//                  {joined:'2000-12-02', name:'John',city:'New York',   anOrder:1500},
//                  {joined:'1965-01-25', name:'Zed', city:'Las Vegas',  anOrder:19.99},
//                  {joined:'1944-06-15', name:'Tina',city:'Seatle',     anOrder:101.5},
//                  {joined:'1995-03-28', name:'Dave',city:'Los Angeles',anOrder:44.99}
//                  ];
//            $scope.doSort = function (propName)    {
//                $scope.sortBy  = propName;
//                $scope.reverse = !$scope.reverse;
//            };
//         });
//}());

//Option 3
(function () {
    var CustomersController = function  ($scope, $log, $window, customersFactory, appSettings) {
             $scope.sortBy  = 'name';
             $scope.reverse = false;
             $scope.appSettings = appSettings;
             console.log(appSettings);
             $scope.customers = [];
             function init() {
               // $scope.customers = customersService.getCustomers();
               customersFactory.getCustomers()
                .success(function(customers){
                    $scope.customers=customers;
                })
                .error(function(data, status, headers, config){
                    $log.log(data.error + ' '+status);
                    console.log(data);
                });
            }
            
            
            $scope.doSort = function(propName)    {
                $scope.sortBy  = propName;
                $scope.reverse = !$scope.reverse;
            };
          // $scope.filters = [{name1:'name',name2:'city'}];
          $scope.deleteCustomer =function (customerid)
          {
             customersFactory.deleteCustomer(customerid)
                .success(function(status)
                {
                    if (status)
                    {
                        for(var i=0, len=$scope.length; i<len; i++)
                        {
                            if ($scope.customers[i].id === customerid)
                            {
                                 $window.alert('Customer Deleted'+ $scope.customers[i]);
                                $scope.customers.splice(i,1);

                                break;
                            }
                        }
                    }
                    else 
                    {
                        $window.alert('Unable to delete customer');
                    }
                })
                .error(function(data,status,header,config)
                {
                   //handle error
                })
             };
        init();
}        
    CustomersController.$inject = ['$scope', '$log','$window','customersFactory','appSettings'];

    angular.module('customersApp')
          .controller('CustomersController', CustomersController);   
}());

//console.log('controllerFound-Customers');