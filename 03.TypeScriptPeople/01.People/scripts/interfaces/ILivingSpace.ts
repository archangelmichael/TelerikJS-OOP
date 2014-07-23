interface ILivingSpace {
    numberOfRooms: number
    capacity?: number
    inhabitants: IPerson[]
    isLocked: boolean
    lock(): void
    unlock():void
    add(person: IPerson): void
    remove(person: IPerson): void
} 