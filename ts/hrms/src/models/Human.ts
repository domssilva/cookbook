export class Human {
    public id: number
    public profession: string|undefined
    private name: string
    private surname: string
    private age: number
    private wage: number|undefined

    constructor(name: string, surname: string, age: number) {
        this.id = this.getRandomId()
        this.name = name
        this.surname = surname
        this.age = age
        this.wage = undefined
        this.profession = undefined
    }

    toString(): string {
        return `
            Human id ${this.id} = {
                name: ${this.name},
                surname: ${this.surname},
                age: ${this.age},
                wage: ${this.wage},
                profession: ${this.profession},
            }
        `
    }

    getRandomId(): number {
        return 0
    }

    getWage(): number|undefined {
        return this.wage
    }

    setWage(wage: number): void {
        this.wage = wage
    }

    setProfession(profession: string): void {
        this.profession = profession
    }

    getProfession(): string|undefined {
        return this.profession
    }
}