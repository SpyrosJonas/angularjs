(function(){
  var customersService = function($http){
  	  /* var customers = [
                  {id:1,joined: '2000-12-02', name:   'Manufactoring',city:   'New York',    anOrder: 1500, 
                    orders:[ {  id:1, product:'Shoes',total: 9.9956 } ]
                  },
                  {id:2,joined:'1965-01-25', name:  'Medical',    city:   'Las Vegas',   anOrder: 19.99,
                    orders: [{id: 1,product: 'Shorts',total: 55},{id: 2,product: 'T-Shirt',total: 85},{id: 3,product: 'Running Glasses',total: 300}                    
                        ]
                  },
                  {id:3,joined:'1944-06-15', name:'Information Technology',   city:'Seatle',      anOrder:101.5, 
                    orders: [{id: 1,product: 'Gloves',total: 55},{id: 2,product: 'Badminton racket',total: 85},{id: 3,product: 'Golf Gloves',total: 300}
                        ]
                  },
                  {id:4,joined:'1995-03-28', name:'Construction',   city:'Los Angeles', anOrder:44.99, 
                    orders: [
                    {id: 1,product: 'Basket ball',total: 55},
                    {id: 2,product: 'Kinesio Tape',total: 85},
                    {id: 3,product: 'Stockings',total: 300}
                    ]
                  }
                  ];*/
            
            this.getCustomers = function(){
            	 return $http.get('/customers');
            };

            this.getCustomer = function(customerId){
            	return $http.get('/customers/'+customerId);
            	/*for(var i=0, len=customers.length; i< len; i++){
            		if(customers[i].id === parseInt(customerId)){
            			return customers[i];
            		}
            	}
            	return {};*/
            };
         };
     customersService.$inject = ['$http'];
         
     angular.module('customersApp').service('customersService', customersService);
     
}());