const pakaian = ["Daster", "Celana kulot", "Kaos", "Piyama"];
const condition = true;

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
// splitPakaian().then(b=> console.log(b))
