import {
  getDatas,
  getDataById,
  postData,
  patchData,
  deleteData,
} from "./repository.js";

const sentNamaLengkap = async () => {
  const datas = await getDatas();

  const lengkap = datas.map(async (data, index) => {
    const id = parseInt(index) + 1;
    const namaLengkap = {
      nama_lengkap: data.nama_depan + " " + data.nama_belakang,
    };

    const upData = await patchData(id, namaLengkap);
    console.log(upData);
  });
  console.log(lengkap);
};
// sentNamaLengkap();

const sumPoinKemenangan = async () => {
  const datas = await getDatas();

  const poinAll = datas.map((data) => {
    const poinKu = data.poin_kemenangan;
    let result = poinKu.reduce((a, b) => {
      return a + b;
    });
    return result;
  });
  console.log(poinAll);
};
// sumPoinKemenangan()

const sumPoinTerkecil = async () => {
  const datas = await getDatas();

  const poinAll = datas.map((data, index) => {
    const poinKu = data.poin_kemenangan;
    let result = poinKu.reduce((a, b) => {
      return a + b;
    });
    return [result, index];
  });

  const terkecil = poinAll.sort();
  console.log(terkecil);

  const show = () => {
    if (terkecil[0]) {
      return "Point terkecil milik " + datas[terkecil[0][1]].nama_lengkap;
    }
  };
  console.log(show());
};
// sumPoinTerkecil();

const sentData = async () => {
  const datas = {
    nama_depan: "Rey",
    nama_belakang: "Mysterio",
    umur: 26,
    alamat: "Jl. Kapitan Pattimura No. 6, Jakarta",
    pekerjaan: "Petarung WWE",
    poin_kemenangan: [95, 86, 94, 96, 92],
    menikah: false,
    hobi: ["Gelut", "Ngoding"],
  };
  const result = await postData(datas);
  console.log(result);
};
// sentData()

const hapusdata = async () => {
  const id = 3;
  const datas = await deleteData(id);
  console.log(datas);
};
// hapusdata()

const updateData = async () => {
  const id = 3;
  const data = {
    umur: 28,
    hobi: ["Gelut", "Ngoding", "Travelling"],
  };
  const datas = await patchData(id, data);
  console.log(datas);
};
// updateData();
