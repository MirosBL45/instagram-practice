// sa kod kviza
let dan = [2, 2].reduce((kodiranje, x) => kodiranje / x, 32);
console.log(`Ovo reduce daje rezultat: ${dan}`);


// call back f-ja
// function poruka(por) {
//     console.log(por);
// }

// function saberi(a, b, poziv) {
//     poziv(a + b);
// }

// poruka('zika trci')

// saberi(4, 9, poruka);

//drugi nacin
const saberi = (a, b, poziv) => {
    poziv(a + b);
}

saberi(4, 9, (por) => {
    console.log(por);
})