/// <reference path="mdObject2.js" /> 

var phonecatApp = angular.module('mdObjectDemo', []);

phonecatApp.controller('DemoController', function ($scope, $parse) {

    $scope.patient = $mdObject.patient;
    $scope.version = $mdObject.version;
    $scope.clinicalDocument = $mdObject.clinicalDocument;
    $scope.LocationType = $mdObject.LocationType;
    $scope.emr = $mdObject.emr;
    $scope.emrUsers = $mdObject.users;
    $scope.hwinstonUser = $mdObject.users.getUser('hwinston');
    $scope.usersInCurrentLocation = $mdObject.users.getUsers();

});