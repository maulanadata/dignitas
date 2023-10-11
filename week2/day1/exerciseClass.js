class User {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }
}
class SiswaDignitas extends User {
  constructor(nama, umur, sekolah) {
    super(nama, umur);
    this.sekolah = sekolah;
    this.nilai = SiswaDignitas.randomNilai();
    this.predikat = this.predikatSiswa(this.nilai);
  }
  static randomNilai() {
    return Math.round(Math.random() * (60 - 100) + 100);
  }
  predikatSiswa(nilai) {
    let predikat = "";
    switch (true) {
      case nilai > 100:
        predikat = "Masukkan nilai dari 0-100";
        break;
      case nilai > 90:
        predikat = "A";
        break;
      case nilai >= 80:
        predikat = "B";
        break;
      case nilai >= 70:
        predikat = "C";
        break;
      case nilai >= 65:
        predikat = "D";
        break;
      default:
        predikat = "E";
        break;
    }
    return predikat;
  }
}

const data = [
  { nama: "Cecil", umur: 18, sekolah: "SMKN 1 Bekasi Timur" },
  { nama: "Najwa", umur: 19, sekolah: "SMKN 1 Bekasi Barat" },
  { nama: "Danar", umur: 20, sekolah: "SMKN 1 Bekasi Timur" },
  { nama: "Reyner", umur: 21, sekolah: "SMKN 1 Bekasi Barat" },
];

let result = [];
for (i = 0; i < data.length; i++) {
  const { nama, umur, sekolah } = data[i];
  result.push(new SiswaDignitas(nama, umur, sekolah));
}
console.log(result);
