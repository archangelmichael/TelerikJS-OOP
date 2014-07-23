module People {
    export class Kid extends Person {
        home: ILivingSpace;

        constructor(firstName: string, lastName: string, location: ILivingSpace, age: number = 18) {
            super(firstName, lastName, location, age);
            this.home = location;
        }

        static actions(): string {
            return 'Kids can : sleep, play, laugh!';
        }

        laugh(): string {
            return this.firstName + ' is laughing!';
        }

        play(): string {
            return this.firstName + ' is playing!';
        }

        sleep(): string {
            return this.firstName + ' is sleeping!';
        }

        toString(): string {
            return ' Kid: ' + super.toString();
        }
    }
}