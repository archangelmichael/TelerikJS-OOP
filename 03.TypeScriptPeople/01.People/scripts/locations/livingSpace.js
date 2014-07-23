var Structures;
(function (Structures) {
    var LivingSpace = (function () {
        function LivingSpace(rooms, capacity) {
            if (typeof capacity === "undefined") { capacity = 8; }
            this.numberOfRooms = rooms;
            this.inhabitants = [];
            this.capacity = capacity;
            this.isLocked = true;
        }
        LivingSpace.prototype.add = function (person) {
            if (this.inhabitants.length >= this.capacity) {
                console.warn("Person cannot enter, cause the living space has reached its capacity!");
            } else {
                this.inhabitants.push(person);
            }
        };

        LivingSpace.prototype.remove = function (person) {
            var personToRemoveIndex = this.inhabitants.indexOf(person);
            if (personToRemoveIndex < 0) {
                console.warn("No such inhabitant found!");
            }
            var personToRemove = this.inhabitants[personToRemoveIndex];
            this.inhabitants[personToRemoveIndex] = this.inhabitants[this.inhabitants.length - 1];
            this.inhabitants.pop();
        };

        LivingSpace.prototype.lock = function () {
            if (this.isLocked) {
                console.log("It is already locked!");
            } else {
                this.isLocked = true;
            }
        };

        LivingSpace.prototype.unlock = function () {
            if (!this.isLocked) {
                console.log("It is already unlocked!");
            } else {
                this.isLocked = false;
            }
        };

        LivingSpace.prototype.toString = function () {
            var output = '';
            for (var i = 0; i < this.inhabitants.length; i += 1) {
                output += this.inhabitants[i];
            }
            return output;
        };
        return LivingSpace;
    })();
    Structures.LivingSpace = LivingSpace;
})(Structures || (Structures = {}));
//# sourceMappingURL=livingSpace.js.map
