var Structures;
(function (Structures) {
    var Locations = (function () {
        function Locations(side) {
            this.side = side;
            this.isLocked = false;
            this.structures = [];
        }
        Locations.prototype.lock = function () {
            this.isLocked = true;
        };

        Locations.prototype.unlock = function () {
            this.isLocked = false;
        };

        Locations.prototype.toString = function () {
            return ", located on the " + position[this.side];
        };
        return Locations;
    })();
    Structures.Locations = Locations;
})(Structures || (Structures = {}));
//# sourceMappingURL=location.js.map
