var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Structures;
(function (Structures) {
    var Apartment = (function (_super) {
        __extends(Apartment, _super);
        function Apartment(floor, apNumber, numberOfRooms, capacity) {
            if (typeof capacity === "undefined") { capacity = 8; }
            _super.call(this, numberOfRooms, capacity);
            this.floor = floor;
            this.apNumber = apNumber;
            this.numberOfRooms = numberOfRooms;
        }
        Apartment.prototype.toString = function () {
            var output = " Apartment number " + this.apNumber + ' is on the ' + this.floor + ' floor and has ' + this.numberOfRooms + ' rooms! Inhabitants: \n';
            return output + _super.prototype.toString.call(this);
        };
        return Apartment;
    })(Structures.LivingSpace);
    Structures.Apartment = Apartment;
})(Structures || (Structures = {}));
//# sourceMappingURL=apartment.js.map
