interface IPerson {
    firstName : string
    lastName : string
    age?: number
    home: ILivingSpace
    greet() : string
    sayLocation() : string
}  