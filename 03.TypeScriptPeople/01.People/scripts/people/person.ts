module People {
    export class Person implements IPerson {
        firstName: string
        lastName: string
        home: ILivingSpace

        constructor(firstName: string, lastName: string, location: ILivingSpace, age: number = 18) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.home = location;
            location.add(this);
        }

        greet(): string {
            return "Hi! My name is " + this.firstName + ' ' + this.lastName;
        }

        sayLocation(): string {
            return "I live at " + this.home;
        }

        toString(): string {
            return " " + this.firstName + ' ' + this.lastName + ';';
        }
    }
}