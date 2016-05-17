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
    var CustomersController = function  ($scope) {
             $scope.sortBy  = 'name';
             $scope.reverse = false;
        
             $scope.customers = [
                  {joined:'2000-12-02', name:'John',city:'New York',   anOrder:1500},
                  {joined:'1965-01-25', name:'Zed', city:'Las Vegas',  anOrder:19.99},
                  {joined:'1944-06-15', name:'Tina',city:'Seatle',     anOrder:101.5},
                  {joined:'1995-03-28', name:'Dave',city:'Los Angeles',anOrder:44.99}
                  ];
            $scope.doSort = function(propName)    {
                $scope.sortBy  = propName;
                $scope.reverse = !$scope.reverse;
            };
    };
        
angular.module('customersApp')
    .controller('CustomersController', CustomersController);
        
}());