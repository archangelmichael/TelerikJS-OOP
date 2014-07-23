var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var People;
(function (People) {
    var Adult = (function (_super) {
        __extends(Adult, _super);
        function Adult(firstName, lastName, location, age) {
            if (typeof age === "undefined") { age = 18; }
            _super.call(this, firstName, lastName, location, age);
            this.home = location;
        }
        Adult.actions = function () {
            return 'Adults can : goOut, getHome!';
        };

        Adult.prototype.goOut = function () {
            this.unlockDoor();
            return this.firstName + " went out!";
        };

        Adult.prototype.getHome = function () {
            this.lockDoor();
            return this.firstName + " got home!";
        };

        Adult.prototype.lockDoor = function () {
            this.home.lock();
        };

        Adult.prototype.unlockDoor = function () {
            this.home.unlock();
        };

        Adult.prototype.toString = function () {
            return ' Adult: ' + _super.prototype.toString.call(this);
        };
        return Adult;
    })(People.Person);
    People.Adult = Adult;
})(People || (People = {}));
//# sourceMappingURL=adult.js.map
