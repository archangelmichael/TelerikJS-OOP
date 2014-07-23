var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var People;
(function (People) {
    var Kid = (function (_super) {
        __extends(Kid, _super);
        function Kid(firstName, lastName, location, age) {
            if (typeof age === "undefined") { age = 18; }
            _super.call(this, firstName, lastName, location, age);
            this.home = location;
        }
        Kid.actions = function () {
            return 'Kids can : sleep, play, laugh!';
        };

        Kid.prototype.laugh = function () {
            return this.firstName + ' is laughing!';
        };

        Kid.prototype.play = function () {
            return this.firstName + ' is playing!';
        };

        Kid.prototype.sleep = function () {
            return this.firstName + ' is sleeping!';
        };

        Kid.prototype.toString = function () {
            return ' Kid: ' + _super.prototype.toString.call(this);
        };
        return Kid;
    })(People.Person);
    People.Kid = Kid;
})(People || (People = {}));
//# sourceMappingURL=kid.js.map
