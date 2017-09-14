declare namespace $mdObject.Interfaces {
    interface IInternalString extends String {
        toList(seporator?: string): string[];
        startsWith(str: string): boolean;
        endsWith(str: string): boolean;
        tag: string;
        toDate(): Date;
    }
}
declare namespace $mdObject {
    abstract class ObjectBase {
        private _mel;
        protected InternalString(a: any, b?: any): Interfaces.IInternalString;
        protected getPatientProperty(local: any, method: string): string;
    }
}
