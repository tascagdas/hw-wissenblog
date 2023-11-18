let counter = 0;
let a = 50;
let b = 0;

while (b <= a) {


    if ((a % b) == 0) {
        counter++
        b++
    } else {
        b++
    }
}

console.log(counter)