module People {
    export class Adult extends Person {
        home: ILivingSpace;

        constructor(firstName: string, lastName: string, location: ILivingSpace, age: number = 18) {
            super(firstName, lastName, location, age);
            this.home = location;
        }

        static actions(): string {
            return 'Adults can : goOut, getHome!';
        }

        goOut(): string {
            this.unlockDoor();
            return this.firstName + " went out!";
        }

        getHome(): string {
            this.lockDoor();
            return this.firstName + " got home!";
        }

        private lockDoor(): void {
            this.home.lock();
        }

        private unlockDoor(): void {
            this.home.unlock();
        }

        toString(): string {
            return ' Adult: ' + super.toString();
        }
    }
}