const promiseFunc = new Promise((resolve, reject) => {
  const time = Math.round(Math.random() * 10000);
  if (time < 5000) {
    setTimeout(() => {
      resolve("cepat nih");
    }, 5000);
  } else {
    reject("kelamaan");
  }
});
promiseFunc
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
