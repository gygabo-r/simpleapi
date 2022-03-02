export class Fruit {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

export const fruits = Array.from({length: 5}, (v, i) => new Fruit(`Fruit ${i+1}`, i +1));