const prompt = require('prompt-sync')({sigint: true});

const num1 = prompt('Akar Pangkat dari: ');

if (num1<0){
    console.log('Tidak boleh input angka Negatif');
}
else if  (num1 % 2 == 1){
    console.log('Tidak boleh input angka Ganjil');
}
else {
    console.log('adalah =');

    console.log(Math.sqrt(Number(num1) ));
}