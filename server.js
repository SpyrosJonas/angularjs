

var express = require('express');
var app = express();
var PORT = process.env.PORT|| 3000;

// app.configure(function (){
//  	app.use(express.static(__dirname+'/'));
//  });
var middleware = require('./middleware.js');

//app.use(middleware.requiereAuthentication);
app.use(middleware.logger);

app.use(express.static(__dirname +'/'));
app.use(express.static(__dirname+ '/app'));
app.use(express.static(__dirname+ '/app/views'));
//app.use(express.static(__dirname+ ''));


console.log(__dirname);
app.get('/customers/:id', function(req,res){
	var customerId = parseInt(req.params.id);
	var data ={};
	for (var i=0, len = customers.length; i< len; i++){
		if(customers[i].id === customerId){
	      data = customers[i];
		}}
	   res.json(data);
	});

	


app.get('/customers', function(req,res){
	res.json(customers);
	//res.json(500, { error: "An error has occured"});
})

app.get('/orders', function(req,res){
	var orders =[];
	
	for(var i=0, len=customers.length; i< len; i++){
		if(customers[i].orders){
			for(var j=0, olen=customers[i].orders.length; j<olen; j++ ){
				orders.push(customers[i].orders[j]);
				//console.log(customers[i].orders[j]);
			}
		}
	}
	res.json(orders);
})

app.delete('/customers/:id', function(req,res){
	var customerId = parseInt(req.params.id);
	var data = {status: true};
	for(var i=0, len=customers.length; i< len; i++){
		if(customers[i].id === customerId){
           customers.splice(i,1);
           data = {status: true};
           break;
		}
	}
	res.json(data);
})
app.listen(PORT, function () {
	console.log('Express started on port '+ PORT+ '!');
});

var customers = [
                  {id:1,joined: '2000-12-02', name:   'Marron5',city:   'New York',    anOrder: 1500, 
                    orders:[ {  id:1, product:'Shoes',total: 9.9956 } ]
                  },
                  {id:2,joined:'1965-01-25', name:  'Zed',    city:   'Las Vegas',   anOrder: 19.99,
                    orders: [{id: 1,product: 'Shorts',total: 55},{id: 2,product: 'T-Shirt',total: 85},{id: 3,product: 'Running Glasses',total: 300}                    
                        ]
                  },
                  {id:3,joined:'1944-06-15', name:'Tina',   city:'Seatle',      anOrder:101.5, 
                    orders: [{id: 1,product: 'Gloves',total: 55},{id: 2,product: 'Badminton racket',total: 85},{id: 3,product: 'Golf Gloves',total: 300}
                        ]
                  },
                  {id:4,joined:'1995-03-28', name:'Dave',   city:'Los Angeles', anOrder:44.99, 
                    orders: [
                    {id: 1,product: 'Basket ball',total: 55},
                    {id: 2,product: 'Kinesio Tape',total: 85},
                    {id: 3,product: 'Stockings',total: 300}
                    ]
                  }
                  ];