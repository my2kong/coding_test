class Person {
    constructor(
        private name:string = 'dummy'
    ) {}

    public say():void {
        alert('Hello, I\'m ' + this.name + '!!');
    }
}

export default Person;