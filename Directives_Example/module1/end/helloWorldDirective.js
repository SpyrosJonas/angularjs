(function () {
  console.log('in Directive')	;
  var app = angular.module('directiveModule',[]);
      app.directive('helloWorld', function() {
      	 return {
      	 	template: '<h1>Hello World</h1>'
      	 };
      })
}());