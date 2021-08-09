export class Person {
    constructor(
        private _id: string,
        public name: string,
        public age: number,
    ) {}

    public greet(): string {
        return "Hello " + this.name;
    }
}
