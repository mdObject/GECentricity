import { MdObject } from './classes';

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

export { MdObject } from './classes';