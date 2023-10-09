const reject = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (!callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(!callback(arr));
}
reject([1,2,3,4], val => val > 2);