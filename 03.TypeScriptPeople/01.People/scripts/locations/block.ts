module Structures {
    export class Block extends Locations implements IBlock {
        apartments: Apartment[]
        blockNumber: number

        constructor(blockNumber: number, side: position) {
                this.blockNumber = blockNumber
            super(side)
            this.apartments = []
        }

        addApartment(apartment: Apartment): void {
            this.apartments.push(apartment);
        }

        toString(): string {
            var result = [];
            var output = '';
            for (var i = 0; i < this.apartments.length; i += 1) {
                result.push(this.apartments[i]);
            }
            output = "Block N: " + this.blockNumber + super.toString() + '.\n' + result.join('\n');
            return output;
        }
    }
}