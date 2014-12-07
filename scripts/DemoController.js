/// <reference path="mdObject2.js" /> 

var phonecatApp = angular.module('mdObjectDemo', []);

phonecatApp.controller('DemoController', function ($scope, $parse) {

    $scope.patient = $mdObject.patient;
});