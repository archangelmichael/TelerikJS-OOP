var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Structures;
(function (Structures) {
    var Block = (function (_super) {
        __extends(Block, _super);
        function Block(blockNumber, side) {
            this.blockNumber = blockNumber;
            _super.call(this, side);
            this.apartments = [];
        }
        Block.prototype.addApartment = function (apartment) {
            this.apartments.push(apartment);
        };

        Block.prototype.toString = function () {
            var result = [];
            var output = '';
            for (var i = 0; i < this.apartments.length; i += 1) {
                result.push(this.apartments[i]);
            }
            output = "Block N: " + this.blockNumber + _super.prototype.toString.call(this) + '.\n' + result.join('\n');
            return output;
        };
        return Block;
    })(Structures.Locations);
    Structures.Block = Block;
})(Structures || (Structures = {}));
//# sourceMappingURL=block.js.map
