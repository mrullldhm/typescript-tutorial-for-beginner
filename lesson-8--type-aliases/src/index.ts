// type alias is a way to create a custom name for a type, making your code more readable, reusable, and maintainable

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: 'Mosh', 
    retire: (date: Date) => {
        console.log(date)
    }
}
