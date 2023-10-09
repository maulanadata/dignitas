// block scope 
let panjang1 = 20
let lebar1 = 30
let tinggi1 = 10

const luasPersegiPanjang = function (panjang, lebar = 10) {
    // console.log(`p = ${panjang}, l = ${lebar}`)
    var luas = panjang * lebar

    return luas //harus di return supaya mengembalikan nilai dari function
}

volumeBalok1 = luasPersegiPanjang(panjang1) * tinggi1

let color
if (volumeBalok1 > 1000) {
    color = "red"
    // console.log(color)
} else {
    color = "blue"
    // console.log(color)
}

// console.log(`Volume balok adalah ${volumeBalok1} dan akan diberi warna ${color}`)

//array
// index array mulai nya dari 0
// length itu mulai dari 1

let newYearResolution = ["Menjadi Fullstack Developer", "Naik Haji", "Jadi Cybersecurity"] // index nya 0 - 2
let buahBuahan = ["apel", 1, true]
let dignitasBatch5 = ["Cecil", "Jua", "Danar", "Fauzi", "Tyo", "Maulana", "Rey"] // index - 6

console.log(newYearResolution[0])

nama1 = dignitasBatch5[4]
nama1[0]
console.log("huruf peratama", nama1[0])

newYearResolution[2] = "Jadi Pengusaha Tambang Emas"
console.log(newYearResolution.length)

console.log("sebelum", dignitasBatch5)
dignitasBatch5.push("Cimenk", "Cimera")
console.log("sesudah", dignitasBatch5)

//loop
//array
//number

for (let i = 2; i <= 10; i *= 2) {
    console.log(i)
}

for (let i = 0; i < dignitasBatch5.length; i++) {
    dignitasBatch5[i] += " Dignitas Jaya Jaya"
}

console.log(dignitasBatch5.length)
