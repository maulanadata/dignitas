// recursive function
// recursive function merupakan function yang memanggil dirinya sendiri yang digunakan untuk menyelesaikan masalah tertentu, biasanya fungsi tersebut terus memanggil dirinya sendiri dengan input yang berbeda sampai mencapai kondisi berhenti (batas).
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));


// anonymous function
// anonymous function merupakan function yang tidak mempunyai nama, function ini biasanya digunakan untuk callback.
(function() {console.log("ini anonymous function biasa")})()
// biasanya function ini digunakan pada operasi filter, map, setTimeout, dll.
map(() => {
    console.log("ini anonymous function arrow");
})
