// 1. Buat kelas Shape, tambahkan metode baru ke prototipe kelas Shape, calcPerimeter(), yang menghitung keliling (panjang tepi luar bentuk) dan mencatat hasilnya ke konsol.
// 2. Buat instance baru dari kelas Shape bernama square. Beri nama square dan tambahkan properti sideLength isi 5.
// 3. Panggil metode calcPerimeter() Anda pada instance, untuk melihat apakah itu mencatat hasil perhitungan ke konsol
// 4. Buat instance baru dari Shape yang disebut triangle, dengan nama triangle dan properti sideLength isi 3
// 5. Panggil triangle.calcPerimeter() untuk memeriksa apakah itu berfungsi dengan baik atau tidak.

class Shape {
  constructor(name, sideLength) {
    this.name = name;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    let sisi = 0;
    switch (this.name) {
      case "triangle":
        sisi = 3;
        break;
      case "square":
        sisi = 4;
        break;
      default:
        break;
    }
    const keliling = this.sideLength * sisi;
    console.log(`keliling dari ${this.name} adalah ${keliling}`);
  }
}
console.log('')
const square = new Shape("square", 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3);
triangle.calcPerimeter();
console.log('')
