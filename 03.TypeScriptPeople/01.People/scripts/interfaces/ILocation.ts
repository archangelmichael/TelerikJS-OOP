interface ILocation {
    side: position;
    isLocked: boolean
    lock(): void
    unlock(): void   
} 

enum position { South,East,North,West }