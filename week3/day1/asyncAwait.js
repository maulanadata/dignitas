// buatlah array = ["Daster", "Celana kulot", "Kaos", "Piyama"]
// kemudian array tersebut dimapping pada promise dan dipanggil menggunakan async/await
const pakaian = ["Daster", "Celana kulot", "Kaos", "Piyama"];
const condition = true;

// const myPromise = () => {
//   return new Promise((tampilkan, buang) => {
//     if (pakaian) {
//       tampilkan(pakaian.map((pakaian) => pakaian));
//     } else {
//       buang("gagal");
//     }
//   });
// };
// async function yesAwait() {
//   try {
//     let val = await myPromise();
//     console.log(val);
//   } catch (error) {
//     console.log(error);
//   }
// }
// yesAwait();
// =====================================

// const promise1 = () => {
//   return new Promise((resolve, reject) => {
//     if (condition) {
//       setTimeout(() => {
//         resolve("promise 1 selesai");
//       }, 4000);
//     } else {
//       reject("promise 1 gagal");
//     }
//   });
// };
// const promise2 = () => {
//   return new Promise((resolve, reject) => {
//     if (!condition) {
//       setTimeout(() => {
//         resolve("promise 2 selesai");
//       }, 2000);
//     } else {
//       reject("promise 2 gagal");
//     }
//   });
// };
// const asyncAwait = async () => {
//   try {
//     const data1 = await promise1();
//     console.log(data1);
//     const data2 = await promise2();
//     console.log(data2);
//   } catch (error) {
//     console.log(error);
//   }
// };
// asyncAwait();
// =====================================

const pushPakaian = () => {
  return new Promise((benar, salah) => {
    if (condition) {
      pakaian.push("jaket");
      benar(pakaian);
    } else {
      salah("pushPakaian gagal");
    }
  });
};
const shiftPakaian = () => {
  return new Promise((tampilkan, buang) => {
    if (condition) {
      const clonePakaian = pakaian.slice();
      clonePakaian.shift();
      tampilkan(clonePakaian);
    } else {
      buang("shiftPakaian gagal");
    }
  });
};
const splitPakaian = () => {
  return new Promise((resolve, reject) => {
    if (condition) {
      const addPakaianIndex = pakaian.slice();
      addPakaianIndex.splice(2, 0, "Jas");
      resolve(addPakaianIndex);
    } else {
      reject("splitPakaian gagal");
    }
  });
};
async function asyncPromiseAll() {
  try {
    const datas = await Promise.all([
      pushPakaian(),
      shiftPakaian(),
      splitPakaian(),
    ]);
    datas.map((data) => {
      console.log(data);
    });
  } catch (error) {
    console.log(error);
  }
}
asyncPromiseAll();
