import axios from "axios";

const baseApi = "http://localhost:3000/biodata";

const getDatas = async () => {
  try {
    const response = await axios.get(baseApi);
    return response.data;
  } catch (error) {
    return error;
  }
};
// getDatas();


const getDataById = async (id) => {
  try {
    const response = await axios.get(`${baseApi}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
// getDataById()


const postData = async (datas) => {
  try {
    const lastId = await axios.get(baseApi).then((response) => {
      return response.data.length;
    });

    const data = {
      id: lastId + 1,
      ...datas,
    };

    const response = await axios.post(baseApi, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
// postData();


const patchData = async (id, payload) => {
  try {
    const lastId = await axios.get(baseApi).then((response) => {
      return response.data.length;
    });

    if (id > lastId) throw Error("ID tidak ditemukan!");

    const updData = async (datas) => {
      const data = {
        ...datas,
        ...payload,
      };

      const response = await axios.patch(`${baseApi}/${id}`, data);
      return response.data
    };

    const response = await axios.get(`${baseApi}/${id}`);
    return updData(response.data);
  } catch (error) {
    return error;
  }
};
// patchData()


const deleteData = async (id) => {
  try {
    const lastId = await axios.get(baseApi).then((response) => {
      return response.data.length;
    });

    if (id > lastId) console.error("ID tidak ditemukan!");

    const response = await axios.delete(`${baseApi}/${id}`);
    return response.data
  } catch (error) {
    return error;
  }
};
// deleteData();

export { getDatas, getDataById, postData, patchData, deleteData };
