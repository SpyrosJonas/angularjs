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
    var CustomersController = function  ($scope, customersService, appSettings) {
             $scope.sortBy  = 'name';
             $scope.reverse = false;
             $scope.appSettings = appSettings;
             $scope.customers = [];
             function init() {
                $scope.customers = customersService.getCustomers();
            }
            init();
             // $scope.customers = [
             //      {id:1,
             //        joined: '2000-12-02', 
             //        name:   'Marron5',
             //        city:   'New York',    
             //        anOrder: 1500, 
             //        orders:[ 
             //                {  id:1, product:'Shoes',total: 9.9956 }
             //        ]
             //      },
             //      {id:2,
             //        joined:'1965-01-25', 
             //        name:  'Zed',    
             //        city:   'Las Vegas',   
             //        anOrder: 19.99,
             //        orders: [
             //            {id: 1,product: 'Shorts',total: 55},
             //            {id: 2,product: 'T-Shirt',total: 85},
             //            {id: 3,product: 'Running Glasses',total: 300}                    
             //            ]
             //      },
             //      {id:3,
             //        joined:'1944-06-15', 
             //        name:'Tina',   
             //        city:'Seatle',      
             //        anOrder:101.5, 
             //        orders: [
             //            {id: 1,product: 'Shorts',total: 55},
             //            {id: 2,product: 'T-Shirt',total: 85},
             //            {id: 3,product: 'Running Glasses',total: 300}
             //            ]
             //      },
             //      {id:4,
             //        joined:'1995-03-28', 
             //        name:'Dave',   
             //        city:'Los Angeles', 
             //        anOrder:44.99, 
             //        oders: [
             //            {id: 1,product: 'Shorts',total: 55},
             //            {id: 2,product: 'T-Shirt',total: 85},
             //            {id: 3,product: 'Running Glasses',total: 300}
             //        ]
             //      }
             //      ];
            $scope.doSort = function(propName)    {
                $scope.sortBy  = propName;
                $scope.reverse = !$scope.reverse;
            };
          // $scope.filters = [{name1:'name',name2:'city'}];
    };
        
    CustomersController.$inject = ['$scope', 'customersService','appSettings'];

angular.module('customersApp')
    .controller('CustomersController', CustomersController);   
}());

//console.log('controllerFound-Customers');