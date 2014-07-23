module Structures {
    export class Locations implements ILocation {
        side: position;
        isLocked: boolean;
        structures: ILivingSpace[]

        constructor(side: position) {
                this.side = side
            this.isLocked = false
            this.structures = []
        }

        lock(): void {
            this.isLocked = true;
        }

        unlock(): void {
            this.isLocked = false;
        }

        toString(): string {
            return ", located on the " + position[this.side];
        }
    }
}