// class MyClass {
//     constructor() {

//     }

//     method1() {

//     }
//     method2() {
        
//     }
//     method3() {
        
//     }
// }

// class User {
//     constructor(name){
//         this.name = name
//     }

//     sayHi(){
//         console.log(this.name)
//     }
// }

// let userA = new User("john")

// userA.sayHi()

// class User {
//     constructor(name){this.name=name}
//     sayHi(){console.log(this.name)}
// }

// console.log(typeof User)

// console.log(User === User.prototype.constructor)
// console.log(User.prototype.constructor)
// console.log(Object.getOwnPropertyNames(User.prototype))

class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed +=speed
        console.log(`${this.name} runs with speed ${this.speed}`)
    }
    stop(){
        this.speed = 0
        console.log(`${this.name} stopped`)
    }
}

let animal = new Animal("My Animal")

// class Rabbit extends Animal{
//     hide(){
//         console.log(`${this.name} hides`)
//     }
// }

class Rabbit extends Animal{
    constructor(name, earLenght){
        super(name)
        this.earLenght = earLenght
    }
    hide(){
        console.log(`${this.name} hides`)
    }
    stop(){
        super.stop() // call parent methods
        this.hide()
    }
}

let rabbit = new Rabbit("my Rabbit", 10)

console.log(rabbit.earLenght)
// rabbit.stop()