module Structures {
    export class Apartment extends LivingSpace {
        numberOfRooms: number
        floor: number
        apNumber: number

        constructor(floor: number, apNumber: number, numberOfRooms: number, capacity: number = 8) {
                super(numberOfRooms, capacity)
            this.floor = floor
            this.apNumber = apNumber
            this.numberOfRooms = numberOfRooms
        }

        toString(): string {
            var output = " Apartment number " + this.apNumber + ' is on the ' + this.floor + ' floor and has ' + this.numberOfRooms + ' rooms! Inhabitants: \n';
            return output + super.toString();
        }
    }
}