module Structures {
    export class LivingSpace implements ILivingSpace {
        numberOfRooms: number
        inhabitants: IPerson[]
        capacity: number
        isLocked: boolean

        constructor(rooms: number, capacity: number = 8) {
                this.numberOfRooms = rooms
            this.inhabitants = []
            this.capacity = capacity
            this.isLocked = true
        }

        add(person: IPerson): void {
            if (this.inhabitants.length >= this.capacity) {
                console.warn("Person cannot enter, cause the living space has reached its capacity!");
            } else {
                this.inhabitants.push(person);
            }
        }

        remove(person: IPerson): void {
            var personToRemoveIndex = this.inhabitants.indexOf(person);
            if (personToRemoveIndex < 0) {
                console.warn("No such inhabitant found!");
            }
            var personToRemove = this.inhabitants[personToRemoveIndex];
            this.inhabitants[personToRemoveIndex] = this.inhabitants[this.inhabitants.length - 1];
            this.inhabitants.pop();
        }

        lock(): void {
            if (this.isLocked) {
                console.log("It is already locked!");
            } else {
                this.isLocked = true;
            }
        }

        unlock(): void {
            if (!this.isLocked) {
                console.log("It is already unlocked!");
            } else {
                this.isLocked = false;
            }
        }

        toString(): string {
            var output = '';
            for (var i = 0; i < this.inhabitants.length; i += 1) {
                output += this.inhabitants[i];
            }
            return output;
        }
    }
}