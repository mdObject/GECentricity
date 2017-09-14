var $mdObject;
(function ($mdObject) {
    var Mel = (function () {
        function Mel() {
            this._noMelData = 'Data Access Error';
            this.melFunc = function (data) {
                return (this._mel === null) ? this._noMelData : this._mel.eval(data);
            };
        }
        Mel.prototype.isActiveXSupported = function () {
            return ("ActiveXObject" in window);
        };
        Object.defineProperty(Mel, "mel", {
            get: function () {
                return this._mel = (this._mel !== undefined) ? this._mel : new Mel();
            },
            set: function (mel) {
                this._mel = mel;
            },
            enumerable: true,
            configurable: true
        });
        return Mel;
    }());
    $mdObject.Mel = Mel;
})($mdObject || ($mdObject = {}));
