function CustomersController () {
             this.sortBy  = 'name';
             this.reverse = false;
             this.customers = [
                  {joined:'2000-12-02', name:'John',city:'New York',   order:1500},
                  {joined:'1965-01-25', name:'Zed', city:'Las Vegas',  order:19.99},
                  {joined:'1944-06-15', name:'Tina',city:'Seatle',     order:101.5},
                  {joined:'1995-03-28', name:'Dave',city:'Los Angeles',order:44.99}
                  ];
            this.doSort = function (propName)    {
                this.sortBy  = propName;
                this.reverse = !this.reverse;
            };
         }

//export.module= 