// function
// alasan function digunakan
// 1. biar ga ribet bikin banyak perintah yang sama
// 2. jadi engga redudant dan lebih readable

//case 1
//hitung luas persegi, dengan rumus p * l

// let panjang1 = 20
// let lebar1 = 30
// luasP1 = panjang1 * lebar1

// console.log("luas Persegi 1", luasP1)

// let panjang2 = 30
// let lebar2 = 20
// luasP2 = panjang2 * lebar2

// console.log("luas Persegi 2", luasP2)

// let panjang3 = 40
// let lebar3 = 30
// luasP3 = panjang3 * lebar3

// console.log("luas Persegi 3", luasP3)

// yang diatas itu redudant soalnya kita ngetik rumus luas terus. kita buat function

// function biasa
//sintaks nya, key function, namaFunction, parameter
// function luasPersegiPanjang(panjang, lebar) {
//     luas = panjang * lebar

//     console.log("luas persegi", luas)
// }

// luasPersegiPanjang(panjang1, lebar1 // ini adalah argumen)
// luasPersegiPanjang(panjang2, lebar2)
// luasPersegiPanjang(panjang3, lebar3)


//case 2
// jangan ubah function luasPersegiPanjang
// hasil luas akan kita kalikan dengan tinggi
// jadi menghasilkan volume dari balok
// rumus nya luasPersegi (p*l) * tinggi

// let panjang1 = 20
// let lebar1 = 30
// let tinggi1 = 10

// function luasPersegiPanjang(panjang, lebar = 10) {
//     console.log(`p = ${panjang}, l = ${lebar}`)
//     luas = panjang * lebar


//     console.log("luas persegi", luas)
//     // kalau masi pake console aja hasilnya akan NaN, cek aja pake typeof

//     return luas //harus di return supaya mengembalikan nilai dari function
// }

// urutan pada argumen harus di perhatikan jangan sampe kebalik
// volumeBalok1 = luasPersegiPanjang(panjang1, lebar1) * tinggi1

// yang ini tebalik gais
// volumeBalok1 = luasPersegiPanjang(lebar1, panjang1) * tinggi1

//ini default parameter
//tetap panjang * 10, karena defaulnya lebar = 10
// volumeBalok1 = luasPersegiPanjang(panjang1) * tinggi1
// console.log("volume balok", volumeBalok1)

//case 3
//helper function
//ada function di dalam function
//function nya main operan operan

// function world() {
//     return " world"
// }

// function hello() {
//     helloWorld = "hello" + world()
//     console.log(helloWorld)
// }

// hello()

// case 4
// function expression
// sintaks nyaa nama function (dimasukin ke variable), key function, parameter 

let panjang1 = 20
let lebar1 = 30
let tinggi1 = 10

const luasPersegiPanjang = function (panjang, lebar = 10) {
    console.log(`p = ${panjang}, l = ${lebar}`)
    luas = panjang * lebar

    console.log("luas persegi", luas)
    // kalau masi pake console aja hasilnya akan NaN, cek aja pake typeof

    return luas //harus di return supaya mengembalikan nilai dari function
}

// ada perbedaan antara function expression dan function biasa
// kalau function biasa kamu bisa panggil function diatas, alias sebelum di bikin
// kalo pake function expression ga bisaaa, harus dibikin dulu diatasnya 

volumeBalok1 = luasPersegiPanjang(panjang1) * tinggi1
// console.log("volume balok", volumeBalok1)


hargaBaju1 = 100000
hargaBaju2 = 200000

const hitungJumlahBeli = function (hargaBaju1, hargaBaju2) {
    hargaAfterDiskon1 = hitungDiskon(hargaBaju1) // ini bisa dipanggil padahal functionnya dibikin baru dibawah
    hargaAfterDiskon2 = hitungDiskon(hargaBaju2)

    return hargaAfterDiskon1 + hargaAfterDiskon2
}

function hitungDiskon(harga) {
    let diskon = 10

    return harga * 10 / 100
}

console.log(hitungJumlahBeli(hargaBaju1, hargaBaju2))

// case 5
// arrow function 
// sintaks nya, nama function (dimasuken ke variable), parameter, trus arrow =>

// const hello = nama => console.log("hello", nama)

const hello = nama => {
    console.log("hello", nama)
    console.log("selamat siang", nama)
}

hello("Danar")



