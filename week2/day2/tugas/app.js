// Buat lah 2 file yang isinya masing masing mempunyai function yang bisa menghitung rumus keliling segitiga dan persegi panjang.
// Buatlah 1 file yang berfungsi sebagi index atau myApps kita dan panggil function 2 function pada soal nomor 1 dan di jalankan di file index / myApps kita

const kPersegiPanjang = require("./persegi-panjang");
const kSegitiga = require("./segitiga");

let a = 5, b = 4, c = 3;

const kelPersegiPanjang = kPersegiPanjang(a, b);
const kelSegitiga = kSegitiga(a, b, c);

console.log("Keliling persegi panjang adalah:", kelPersegiPanjang);
console.log("Keliling segitiga adalah:", kelSegitiga);
console.log("")
