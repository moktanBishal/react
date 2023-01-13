// console.log(Math.max(50,100));
// let result = 1;
// for (let i=0; i<10; i++) {
//     result = result * 2;
//     console.log(result);
// }
// let a = '#';
// for (let j=0; j<7; j++) {

//     console.log(a);
//     a += "#";
// }
for (let k=1; k<=100; k++) {
    if ((k%3) == 0) {
        console.log("Fizz",k);
    } else if ((k%5) == 0 && !(k%3) == 0) {
        console.log("Buzz", k);
    }
    if ((k%5) == 0 && (k%3) == 0) {
        console.log("FizzBuzz",k);
    }
}
