/// <reference path="$mdobject.objectbase.d.ts" />
declare namespace $mdObject.Interfaces {
    interface IPhone {
        home: string;
        business: string;
        mobile: string;
    }
}
declare namespace $mdObject {
    class Phone extends ObjectBase implements Interfaces.IPhone {
        private _home;
        private _business;
        private _mobile;
        readonly home: string;
        readonly business: string;
        readonly mobile: string;
    }
}
