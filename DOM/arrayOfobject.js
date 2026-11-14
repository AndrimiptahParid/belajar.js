let produk = [
    {
        nama: 'laptop',
        harga: 200000,
        stok: 10
    },
    {
        nama: 'mouse',
        harga: 300000,
        stok: 5
    },
    {
        nama: 'keyboard',
        harga: 600000,
        stok: 20
    }
];

// for (let i = 0; i < produk.length; i++){
//     console.log(`nama produk: ${produk[i].nama}`);
//     console.log(`harga: ${produk[i].harga}`);
//     console.log(`stok: ${produk[i].stok}`);
// };

// // method map untuk mengembalikan array baru
// let namaProduk = produk.map(item => item.nama);
// console.log(namaProduk);

// // method filter untuk menyaring item tertentu
// let stokBanyak = produk.filter(item => item.stok > 5);
// console.log(stokBanyak);

// // method find untuk mencari item tertentu
// let cariProduk = produk.find(item => item.nama === 'mouse');
// console.log(cariProduk);

// // method reduce untuk menghitung total harga semua produk
// let totalHarga = produk.reduce((total, item) => total + item.harga, 0);
// console.log(totalHarga);

// // method sort untuk mengurutkan produk berdasarkan harga
// let urutHarga = [...produk].sort((a, b) => a.harga - b.harga);
// console.log(urutHarga);

// produk dengan stok lebih dari 10
let stokSedikit = produk.filter(item => item.stok < 10);
console.log(stokSedikit);

// total nilai semua barang
let totalNilai = produk.reduce((total, item) => total + (item.harga * item.stok), 0);
console.log("totalnilai: ", totalNilai);

// produk termahal
let produkTermahal = produk.reduce((max, item) => { 
    return item.harga > max.harga ? item : max; 
});

console.log("produk termahal: ", produkTermahal);