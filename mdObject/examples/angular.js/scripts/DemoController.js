/// <reference path="bundle.public.min.js" /> 

var phonecatApp = angular.module('mdObjectDemo', []);

phonecatApp.controller('DemoController', function ($scope, $parse) {

    $scope.flowsheets = [
        { name: "Internal Medicine", value: "Enterprise\\Medicine\\Internal Medicine" },
        { name: "Immunizations", value: "Enterprise\\Interfaces\\CCD\\Immunizations" },
        { name: "Metabolic Panel", value: "Enterprise\\Medicalogic\\Metabolic Panel" },
        { name: "Prenatal Visit", value: "Enterprise\\Medicalogic\\OB/GYN\\Prenatal Visit" },
        { name: "Vital signs", value: "Enterprise\\Medicine\\Vital signs" }
    ];

    if (mdObject != null) {
        $scope.patient = mdObject.patient;
        $scope.version = mdObject.version;
        $scope.clinicalDocument = mdObject.clinicalDocument;
        $scope.LocationType = mdObject.LocationType;
        $scope.emr = mdObject.emr;
        $scope.emrUsers = mdObject.users;
        $scope.hwinstonUser = mdObject.users.getUser('hwinston');
        $scope.usersInCurrentLocation = mdObject.users.getUsers();
        $scope.currentUser = mdObject.users.getUser();
        $scope.mel = mdObject.emr.mel;
    } else {
        alert('The "mdObject" is not defined.')
    }

});