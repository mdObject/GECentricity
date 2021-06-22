import { MdObject } from './classes/classes';

(function (window) {
    var mdObject: MdObject;
    try {
        mdObject = new MdObject(window, window.document);
        window['mdObject'] = mdObject;
    }
    catch (e) {
        console.error(e);
    }
    return mdObject;
})(window);

export { MdObject } from './classes/classes';

export * from './classes/classes';

export * from './enums/enums';