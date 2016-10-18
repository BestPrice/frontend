var App = angular.module('App', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
App.controller('Controller', function Controller($scope) {
  $scope.greetings = [
    {
      name: 'Greeting 1',
      text: 'Lorem ipsum ... 1'
    }, {
      name: 'Greeting 2',
      text: 'Lorem ipsum ... 2'
    }, {
      name: 'Greeting 3',
      text: 'Lorem ipsum ... 3'
    }
  ];
});
