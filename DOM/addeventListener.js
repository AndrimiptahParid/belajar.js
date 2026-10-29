// const judul = document.querySelector('#judul');
// const ubah = document.querySelector('#ubah');

// ubah.addEventListener('click', function(){
//     judul.textContent = 'saya jago javascript';
// });

// const stokk = document.querySelector('#stok');
// const jual = document.querySelector('#jual');
// const Restock = document.querySelector('#Restock');


// let stok = 10;
// stokk.textContent = `stok yang tersedia ${stok}`;
// jual.addEventListener('click', function(){
//     if (stok > 0){
//         stok--;
//         stokk.textContent = `stok masih tersedia ${stok}`;
//     } else {
//         stokk.textContent = 'stok sudah habis';
//     }  
// });

// Restock.addEventListener('click', function(){
//     stok = stok + 5;
//     stokk.textContent = `stok yang tersedia ${stok}`;
// });

const stokk = document.querySelector('#stok');
const pesan = document.querySelector('#pesan');
const jual = document.querySelector('#jual');
const Restock = document.querySelector('#Restock');

let stok = 10;

stokk.textContent = `stok: ${stok}`;
pesan.textContent = 'stok masih tersedia';

jual.addEventListener('click', function(){
    if (stok > 0){
        stok--;
    };

    stokk.textContent = `stok: ${stok}`;

    if (stok === 0){
        pesan.textContent = 'stok sudah habis';
    } else {
        pesan.textContent = 'stok masih tersedia';
    }
});

Restock.addEventListener('click', function(){
     stok = stok + 5;
     stokk.textContent = `stok: ${stok}`;

     if (stok > 0){
        pesan.textContent = 'stok masih tersedia';
     }
});