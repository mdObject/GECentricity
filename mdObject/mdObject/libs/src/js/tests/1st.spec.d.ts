/// <reference path="../scripts/$mdObject.Mel.d.ts" />
/// <reference path="../../../../tests/typemoq.d.ts" />
declare class MelMock implements $mdObject.Interfaces.IMel {
    private _mel;
    private _noMelData;
    isActiveXSupported(): boolean;
    melFunc: (data: string) => string;
}
declare function validatePatientStringGetProperty(propertyName: string, data: string): void;
declare function createMelMock(): TypeMoq.Mock<$mdObject.Interfaces.IMel>;
declare function setupSimpleMelMock(): TypeMoq.Mock<$mdObject.Interfaces.IMel>;
