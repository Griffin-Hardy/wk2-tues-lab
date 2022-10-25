let person = {
    firstName: 'Griffin',
    lastName: 'Hardy',
    age: 23
}

console.log(person.firstName)
console.log(person['lastName'])


let meal = {
    appetizer: 'cactus blossom',
    entree: 'steak',
    dessert: 'Ice Cream',
    drink: 'Dr, pepper',
}

//let appetizer = meal.appetizer

const {appetizer, entree} = meal

const {drink: bestDrinkEver} = meal

console.log(appetizer, entree, bestDrinkEver)

meal.sides = ['House salad with blue cheese', 'loaded mashed potatoes']


delete meal.dessert
console.log(meal)

for(let food in meal){
    console.log(`for ${food} I Had ${meal[food]}`)
}

class pet {
    constructor(name, age, color){
        this.name = name
        this.age = age
        this.color = color
    }

    greeting() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old!`)
    }
}

//let pet1 = new pet('sully', 1, 'tuxedo')

//console.log(pet1)

//pet1.greeting()

class Dog extends pet {
    constructor(name, age, color, breed){
        super(name, age, color)
        this.breed = breed
    }
}

let pet1 = new Dog('buster', 7, 'black', 'corgi')

pet1.greeting()

class Cat extends pet{
    constructor(name, age, color){
        super(name, age, color)

        this.temperment = 'mean'
    }
    isNice(newTemperment){
        this.temperment = newTemperment
        console.log(`${this.name} is now a ${this.temperment} cat!`)
    }
}

let cat1 = new Cat('sully', 1, 'tux')

console.log(cat1)
cat1.isNice('super sweet')