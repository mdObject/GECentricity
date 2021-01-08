/// <reference types="../../../lib/mdobject-mdobject" />

var phonecatApp = angular.module('mdObjectDemo', []);

phonecatApp.controller('DemoController', function ($scope, $parse) {

    const getPatient = async function (mdObject) {
        $scope.patient = await mdObject.emr.patientAsync();
       // $scope.$apply();  // don't forget this!
    }

    $scope.flowsheets = [
        { name: "Internal Medicine", value: "Enterprise\\Medicine\\Internal Medicine" },
        { name: "Immunizations", value: "Enterprise\\Interfaces\\CCD\\Immunizations" },
        { name: "Metabolic Panel", value: "Enterprise\\Medicalogic\\Metabolic Panel" },
        { name: "Prenatal Visit", value: "Enterprise\\Medicalogic\\OB/GYN\\Prenatal Visit" },
        { name: "Vital signs", value: "Enterprise\\Medicine\\Vital signs" }
    ];

    if (mdObject != null) {
        getPatient(mdObject);
        $scope.version = mdObject.version;
        $scope.clinicalDocument = mdObject.emr.clinicalDocument;
        $scope.LocationType = mdObject.emr.LocationType;
        $scope.emr = mdObject.emr;
        $scope.emrUsers = mdObject.emr.users;
//        $scope.hwinstonUser = mdObject.emr.users.getUser('hwinston');
//        $scope.usersInCurrentLocation = mdObject.emr.users.getUsers();
//        $scope.currentUser = mdObject.emr.users.getUser();
//        $scope.mel = mdObject.emr.mel;
    } else {
        alert('The "mdObject" is not defined.')
    }

});
