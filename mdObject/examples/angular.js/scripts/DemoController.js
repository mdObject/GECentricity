/// <reference types="../../../lib/mdobject-mdobject" />

var angularJsApp = angular.module('mdObjectDemo', []);

angularJsApp.controller('DemoController', function ($scope, $parse) {

    $scope.flowsheets = [
        { name: "Internal Medicine", value: "Enterprise\\Medicine\\Internal Medicine" },
        { name: "Immunizations", value: "Enterprise\\Interfaces\\CCD\\Immunizations" },
        { name: "Metabolic Panel", value: "Enterprise\\Medicalogic\\Metabolic Panel" },
        { name: "Prenatal Visit", value: "Enterprise\\Medicalogic\\OB/GYN\\Prenatal Visit" },
        { name: "Vital signs", value: "Enterprise\\Medicine\\Vital signs" }
    ];

    if (mdObject != null) {
        $scope.patient = mdObject.emr.patient;
        $scope.version = mdObject.version;
        $scope.clinicalDocument = mdObject.emr.clinicalDocument;
        $scope.LocationType = mdObject.emr.LocationType;
        $scope.emr = mdObject.emr;
        $scope.emrUsers = mdObject.emr.users;
        $scope.hwinstonUser = mdObject.emr.users.getUser('hwinston');
        $scope.usersInCurrentLocation = mdObject.emr.users.getUsers();
        $scope.currentUser = mdObject.emr.users.getUser();
        $scope.mel = mdObject.emr.mel;
    } else {
        alert('The "mdObject" is not defined.')
    }

});