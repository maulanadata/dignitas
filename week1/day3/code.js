// const hello = (cb) => {
//     return "Hello " + cb()
// }
// const name = () => "Maulana"
// console.log(hello(name))
// ================================

// let username = "Sugiono"
// let pass = "123"
// let age = 69
// const validateAge = (age) => {
//     let result = ""
//     if(age > 20){
//         result = "Wow... anda bisa akses semua film!"
//     }else{
//         result = "Nonton Donal bebek aja kau!"
//     }
//     return result
// }
// const register = (username, password, age, cb) => {
//     if(!username){
//         console.log("Username dibutuhkan oy!")
//     } else if (!password){
//         console.log("Password dibutuhkan oy!")
//     } else {
//         console.log(`Halo selamat datang ${username}. ${cb(age)}`)
//     }
// }
// register(username, pass, age, validateAge)
// =====================================

const age = [20, 18, 10, 30, 23, 50];
// const ageSort = age.sort().reverse()
// console.log(ageSort)
// console.log(`umur tertua ${ageSort[0]} tahun dan umur termuda ${ageSort[ageSort.length - 1]} tahun`)

const validateAge = (umur) => {
  let min = umur[0];
  let max = umur[0];
  for (let i = 1; i < umur.length; i++) {
    if (umur[i] < min) {
      min = umur[i];
    } else if (umur[i] > max) {
      max = umur[i];
    }
  }
  return `umur tertua ${max} tahun dan umur termuda ${min} tahun`
};
console.log(validateAge(age));
// =========================================
