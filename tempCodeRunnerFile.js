//1


let array1 =["hello1", 14,24, "hello2"] 

let newArray1 = array1.filter((item1) => typeof item1 === "number")

console.log(newArray1);

//2
let link1 = "https://google.com";
function containsHttps(string) {
    return string.indexOf("https://") >= 0
        ? "yes it contains 'https://'"
        : "no it doesnt contain 'https://'";
}
console.log(containsHttps(link1));

//3

let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach((value) => (sum += value));
console.log(sum);

//4
let languages = ["html", "css", "javascript", "python", "php"];
console.log(languages.filter((l) => l.length > 3));

//5

let words = ['madrid', 'rome', 'milan', 'berlin'];
console.log(words.filter((l) => l.includes("m") && l.includes("d")));

//6
let array6 = [-1, -2, -3, 4];
console.log(array6.some((e) => e > 0));

//7

let array7 = "12345"
let splitnum = array7.split("").map(Number);

let sum1 = 0

for (let i = 0; i = splitnum.length; i++) {
    sum1 += splitnum[i]

} 

console.log(sum1);
 