/// <reference types="../../../lib/mdobject-mdobject" />

window['errors'] = new Array();

var angularJsApp = angular.module('mdObjectDemo', []);

angularJsApp.factory('$exceptionHandler', function () {
    return function (error, _cause) {
        window['errors'].push(error);
        console.error(error); // this notifies CatchJS of the error
    };
})

angularJsApp.controller('DemoController', function ($scope, $parse) {
    $scope.errorLog = window['errors'];
    try {
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
            $scope.content = mdObject.emr.melContent('GE.IMM.MASTER.ROUTE');
        } else {
            alert('The "mdObject" is not defined.')
        }
    }
    catch (e) {
        window['errors'].push(e);
        console.error(e);
    }

});