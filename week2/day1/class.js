class Animals {
    constructor(name, age, color, food){
        this.name = name
        this.age = age
        this.color = color
        this.food = food
        this.speed = 0
    }
    sayHi(){
        return `Halo aku ${this.name}`
    }
    runSpeed(){
        return this.speed++
    }
    static pemakan(makan){
        return `aku jenis hewan ${makan}`
    }
}
const kucing = new Animals("Kucing", 6, "oren", "whiskas")
kucing.runSpeed()
console.log(kucing)
console.log(Animals.pemakan("karnivora"))

class Burung extends Animals {
    constructor(name, age, color, food,  type){
        super(name, age, color, food)
        this.type = type
    }
}
const burung = new Burung("Sombro", 4, "putih", "biji-bijian", "kakaktua")
// console.log(burung)
// console.log(burung.sayHi())

