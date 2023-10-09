const student = {
    name:"Maulana",
    age: 20,
    skin: "brown",
    favFood: ["ketoprak", "nasi lengko"],
    event: {
        morning:"ngasih makan ikan",
        afternoon:"handle warung",
        night:"ngitung duwit"
    },
    hello: ()=> `hello panda hello panda`
}
// console.log(student.name)
// console.log(student.hello())
// console.log(student["name"])

// const objStudent = (val) => student[val]
// console.log("name:", objStudent("name"))
// console.log("age:", objStudent("age"))

// for (const key in student){
//     console.log(student[key])
// }

// console.log("Key object student : ", Object.keys(student))
// console.log("Key value student : ", Object.values(student))

// student.age = 22
// student.favFood.push("ayam geprek")
// student.event = {...student.event, evening:"olahraga"}
// console.log(student)

const {name, age} = student
console.log(`my name is ${name}, my age is ${age}`)

const callName = ({name, age}) => `Hello my name is ${name}, and my age is ${age}`
console.log(callName(student))
