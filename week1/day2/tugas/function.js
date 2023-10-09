console.log("\n----- Soal 1 -----")
const str = "dignitas bka is the coolest academy"
let words = str.split(' ')
for(let i=0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)
}
let result1 = words.join(" ")
console.log(result1)


console.log("\n----- Soal 2 -----")
const revNum = (num) => {
    let temp = num.toString().split('').reverse().join('')
    return parseInt(temp)
}
const num = 9876549
console.log(revNum(num))


console.log("\n----- Soal 3 -----")
// Rate mata uang per tanggal 27 Mei 2022
// https://www.exchangerates.org.uk/historical/find-exchange-rate-history-for-27_05_2022
const rates = {
    "USD": {"symbol":"$","IDR": 14539,"JPY": 127,"CNY": 6.69,"MYR": 4.37,},
    "IDR": {"symbol":"Rp.","USD": 0.0001,"JPY": 0.0087,"CNY": 0.0005,"MYR": 0.0003,},
    "JPY": {"symbol":"¥","USD": 0.0079,"IDR": 114.38,"CNY": 0.0527,"MYR": 0.0345,},
    "CNY": {"symbol":"¥","USD": 0.1493,"IDR": 2170.5,"JPY": 18.97,"MYR": 0.65,},
    "MYR": {"symbol":"RM","USD": 0.22,"IDR": 3320,"JPY": 29,"CNY": 1.52,},
};

const convert = (fromCurrency, amount, toCurrency) => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return "Mata uang 'dari' dan 'ke' tidak valid"
    
    const rate = rates[fromCurrency][toCurrency];
    const convertedAmount = Math.round(amount * rate);
    
    return rates[toCurrency]["symbol"] + convertedAmount.toString();
}
console.log(convert("USD", 100, "IDR"));

console.log('')
