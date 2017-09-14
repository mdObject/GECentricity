declare namespace $mdObject.Interfaces {
    interface IMel {
        isActiveXSupported: () => boolean;
        melFunc: (data: string) => any;
    }
}
declare namespace $mdObject {
    class Mel implements Interfaces.IMel {
        private static _mel;
        private _noMelData;
        isActiveXSupported(): boolean;
        melFunc: (data: string) => any;
        static mel: Interfaces.IMel;
    }
}
