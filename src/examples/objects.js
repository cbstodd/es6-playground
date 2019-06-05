class Person {
    constructor(firstName, lastName) {
        if (typeof firstName === 'string') {
            this.firstName = firstName;
        } else {
            throw Error('firstName must be a type string');
        }
        if (typeof lastName === 'string') {
            this.lastName = lastName;
        } else {
            throw Error('lastName must be a type string');
        }

    }

    sayName() {
        return `Hello my name is ${this.firstName} ${this.lastName}`;
    }
}

const colin = new Person('Colin', 'Stodd');
console.log(colin.sayName());


const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = `${value} is where I live`;
        this.locations.push(this._location);
    },
};

data.location = 'Chevy Chase, MD';
data.location = 'Annapolis, MD';

console.log(data);