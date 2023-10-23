import axios from "axios";

const baseApi = "http://localhost:3000/biodata";

const getData = async () => {
  await axios.get(baseApi).then((response) => {
    console.log(response.data);
  });
};
// getData();

const postData = async () => {
  await axios
    .post(baseApi, {
      id: 10,
      nama: "Asep",
      umur: 85,
      alamat: "Jl. Ratna Dewi No. 02, Bandung",
      pekerjaan: "Bapak Rumah Tangga",
      hobi: ["game", "ghibah"],
    })
    .then((response) => {
      console.log(response.data);
    });
};
// postData();

const putData = async () => {
  const id = 10;
  await axios
    .put(`${baseApi}/${id}`, {
      id: id,
      nama: "Asep",
      umur: 85,
      alamat: "Jl. Ratna Dewi No. 06, Bekasi",
      pekerjaan: "Bapak Rumah Tangga",
      hobi: ["mancing", "ghibah"],
    })
    .then((response) => {
      console.log(response.data);
    });
};
// putData();

const patchData = async () => {
  const id = 10;
  await axios
    .patch(`${baseApi}/${id}`, {
      hobi: ["mancing", "ghibah", "game"],
    })
    .then((response) => {
      console.log(response.data);
    });
};
patchData();

const deleteData = async () => {
  const id = 10;
  await axios.delete(`${baseApi}/${id}`).then((response) => {
    console.log(response.data);
  });
};
// deleteData();

const updateData = async () => {
  const id = 10;
  
  const updData = async (obj) => {
    const data = obj
    data.hobi.push("tidur")

    await axios
    .put(`${baseApi}/${id}`, data)
    .then((response) => {
      console.log(response.data);
    });
  }

  await axios.get(`${baseApi}/${id}`).then((res) => {
    return updData(res.data);
  });
};
updateData();
