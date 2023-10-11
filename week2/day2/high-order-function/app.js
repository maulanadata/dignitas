const dataSiswa = require("./data")


console.log("=== foreach ===")
const dataForeach = dataSiswa.forEach(data => {
    return data.umur * 2
})
console.log(dataForeach)

console.log("=== mapping ===")
const dataMapping = dataSiswa.map(data => {
    return data.umur * 2
})
console.log(dataMapping)

console.log("=== filter ===")
const dataFilter = dataSiswa.filter(data => {
    return !(data.umur < 20)
})
console.log(dataFilter)

console.log("=== reduce ===")
const dataUmur = dataSiswa.map(e=>e.umur)
const dataReduce = dataUmur.reduce((data, currentData) => {
    return data + currentData
})
console.log(dataReduce)
