import { StringInternal } from '../factories/factories';
import { EmrMel, EmrApp } from '../classes/classes';

export class EmrWindow {

    constructor(
        public _mel: EmrMel,
        public _app: EmrApp,
        public _window: any,
        public _document: any
    ) { }

    openDialog = (url: string) => {
        ((StringInternal(url.toLowerCase())).startsWith('//localserver')) ? this._mel.showUrlDialog(url) : this._app.showUrlDialog(url);
    }

    /**
     * Arguments :
     * verb : 'GET'|'POST', defaults to "GET"
     * target : an optional opening target (a name, or "_blank"), defaults to "_self"
     */
    open = (url: string, verb: string, target: string, features: string, data: Object) => {
        let form: HTMLFormElement = this._document.createElement("form");
        form.action = url;
        form.method = verb || 'GET';
        form.target = target || "_self";
        if (data) {
            for (let key in data) {
                let input: HTMLTextAreaElement = this._document.createElement("textarea");
                input.name = key;
                input.value = (typeof data[key] === "object") ? JSON.stringify(data[key]) : data[key];
                form.appendChild(input);
            }
        }
        form.style.display = 'none';
        this._document.body.appendChild(form);
        let _window = this._window.open("about:blank", target, features);
        form.submit();
        return _window;
    }
}