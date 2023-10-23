// buatlah promise all, didalam promise all ada 3 promise yang masing-masing punya timeout beda-beda waktunya. atau tiap promise ada function sendiri
const condition = true;
const operation1 = () => {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve("operation 1 selesai");
      }, 2000);
    } else {
      reject("operation 1 gagal");
    }
  });
};
const operation2 = () => {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve("operation 2 selesai");
      }, 6000);
    } else {
      reject("operation 2 gagal");
    }
  });
};
const operation3 = () => {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve("operation 3 selesai");
      }, 4000);
    } else {
      reject("operation 3 gagal");
    }
  });
};

Promise.all([operation1(), operation2(), operation3()])
  .then((result) => {
    result.forEach((done) => {
      console.log(done);
    });
  })
  .catch((err) => {
    console.log("error : ", err);
  });
