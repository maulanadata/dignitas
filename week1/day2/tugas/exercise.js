console.log("\n----- Soal 1 -----");
const each = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
each([1, 2, 3, 4], (val) => console.log(val));
each([1, 2, 3, 4], (val) => console.log(val * 2));


console.log("\n----- Soal 2 -----");
const editArray = (arr, action, position, value) => {
  // validasi parameter
  if (action !== "add" && action !== "delete") {
    console.log("Action harus berupa 'add' atau 'delete'");
  }
  if (position !== "first" && position !== "last") {
    console.log("Position harus berupa 'first' atau 'last'");
  }
  // eksekusi
  if (action === "add") {
    position === "first" ? arr.unshift(value) : arr.push(value);
  }
  if (action === "delete") {
    position === "first" ? arr.shift() : arr.pop();
  }
  console.log(arr);
};
editArray([1, 2, 3, 4], "add", "first", 5);


console.log("\n----- Soal 3 -----");
const reject = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  console.log(result);
};
reject([1, 2, 3, 4], (val) => val > 2);

console.log("");
