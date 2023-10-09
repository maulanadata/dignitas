// const rumah = {
//     style: "joglo",
//     warna: "biru",
//     bahan: ["semen", "batu bata", "batu kerikil", "besi"],
//     luas: 250,
//     ruangan: {
//         tamu: ["sofa", "meja", "kipas angin", "sound", "hiasan"],
//         kamar: ["kasur", "meja rias", "lemari pakaian"],
//         dapur: ["kompor", "gas", "peralatan dapur", "dan lain-lain"],
//         kamarMandi: ["WC", "kolam", "gayung", "dan lainnya"]
//     },
//     hitung: ()=>{
//         let {style, ruangan} = rumah
//         style += " Dignitas batch 5"
//         const jumlahRuang = Object.keys(ruangan).length
//         rumah.harga = (jumlahRuang > 5) ? 1000000000 : 100000000
//         rumah.pajak = rumah.harga * 10/100

//         return {...rumah, style}
//     }
// }
// console.log(rumah.hitung())
// ========================================================

const dignitas = [
  { name: "Cecil", nilai: 92 },
  { name: "Najwa", nilai: 80 },
  { name: "Danar", nilai: 79 },
  { name: "Reyner", nilai: 88 },
];

let totalNilai = 0;
for (i = 0; i < dignitas.length; i++) {
  switch (true) {
    case dignitas[i].nilai > 100:
      dignitas[i].predikat = "Masukkan nilai dari 0-100";
      break;
    case dignitas[i].nilai > 90:
      dignitas[i].predikat = "A";
      break;
    case dignitas[i].nilai >= 80:
      dignitas[i].predikat = "B";
      break;
    case dignitas[i].nilai >= 70:
      dignitas[i].predikat = "C";
      break;
    case dignitas[i].nilai >= 65:
      dignitas[i].predikat = "D";
      break;
    default:
      dignitas[i].predikat = "E";
      break;
  }
  totalNilai += dignitas[i].nilai;
}
const result = (totalNilai / dignitas.length).toFixed(2);

console.log(dignitas);
console.log(`Nilai rata-rata dari ${dignitas.length} siswa adalah = ${result}`);
