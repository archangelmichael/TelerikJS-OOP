var People;
(function (People) {
    var Person = (function () {
        function Person(firstName, lastName, location, age) {
            if (typeof age === "undefined") { age = 18; }
            this.firstName = firstName;
            this.lastName = lastName;
            this.home = location;
            location.add(this);
        }
        Person.prototype.greet = function () {
            return "Hi! My name is " + this.firstName + ' ' + this.lastName;
        };

        Person.prototype.sayLocation = function () {
            return "I live at " + this.home;
        };

        Person.prototype.toString = function () {
            return " " + this.firstName + ' ' + this.lastName + ';';
        };
        return Person;
    })();
    People.Person = Person;
})(People || (People = {}));
//# sourceMappingURL=person.js.map
