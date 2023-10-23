// Panggil menggunakan method fetch dari url ini :
// * https://jsonplaceholder.typicode.com/albums
// * https://handlers.education.launchcode.org/static/planets.json
// * https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/scores/
// Lakukan Promise All agar data yang sampai sudah lengkap semua

const fetchData = async () => {
  const url1 = "https://jsonplaceholder.typicode.com/albums";
  const url2 = "https://handlers.education.launchcode.org/static/planets.json";
  const url3 = "https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/scores/";

  // Buat Promise untuk setiap URL
  const promise1 = fetch(url1);
  const promise2 = fetch(url2);
  const promise3 = fetch(url3);

  // ======= Cara ini lebih jos
  const results = await Promise.all([promise1, promise2, promise3]);

  const data1 = await results[0].json();
  const data2 = await results[1].json();
  const data3 = await results[2].json();

  console.log(data1, data2, data3);

  // ======= Cara ini kurang relevan, karena data url3 tidak tampil semua
  // const a1 = await promise1
  // const b1 = await promise2
  // const c1 = await promise3
  // const a2 = await a1.json()
  // const b2 = await b1.json()
  // const c2 = await c1.json()
// console.log(c2);
  // const result = await Promise.all([a2, b2, c2]);
  // console.log(result);
};

fetchData();
