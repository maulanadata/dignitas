import fetch from "node-fetch";
import datas from "./data.json" assert { type: "json" };

// const baseApi = "https://jsonplaceholder.typicode.com/users";

// ======= promise then/catch =======
// GET
// fetch(baseApi)
//   .then((response) => {
//     if (response.ok) return response.json();
//     throw new Error("Request failed!");
//   })
//   .then((resultJson) => {
//     // console.log(resultJson);
//     resultJson.map(a=>console.log(a.name))
//   });

// ======= promise async/await =======
// GET
const getAsync = async () => {
  try {
    const res = await datas;
    // console.log(res);
    const result = res.map((a) => a.nama);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
getAsync();

// POST
// const postAsync = async () => {
//   try {
//     const res = await datas;
//     // console.log(res);
//     const result = res.map((a) => a.umur);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// postAsync();
// console.log(datas);

