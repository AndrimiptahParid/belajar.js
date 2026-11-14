// destrukturing array

let buah = ['apel', 'jeruk', 'mangga', 'pisang'];

// cara biasa

const satu1 =  buah[0];
const dua2 = buah[1];

// cara destrukturing
const [satu, dua, tiga, empat] = buah;

console.log(satu);
console.log(dua);
console.log(tiga);


// destrukturing object

let mhs = {
    nama: 'andri',
    umur: 20,
    jurusan: 'teknik informatika'
}

const {nama1, umur} = mhs;

console.log(nama1);
console.log(umur);

// spread operator pada array

let angka = [1, 2, 3, 4, 5];
let angka1 = [6, 7, 8, 9, 10];

let gabung = [...angka, ...angka1];
console.log(gabung);

// spread operator pada object

let mhs1 = {
    nama: 'budi',
    umur: 21,
    jurusan: 'sistem informasi'
}
let gabungkan = {
    status: 'aktif',
    kota: 'jakarta',
}

let gabungObjek = {...mhs1, ...gabungkan};
console.log(gabungObjek);

// rest parameter
 
function hitungTotal(...angka) {
  let total = 0;
  for (let a of angka) {
    total += a;
  }
  return total;
}

console.log(hitungTotal(1, 2, 3, 4)); // 10

// study kasus mengelola data mahasiswa
const mahasiswa = {
  nama: "Agung",
  jurusan: "Informatika",
  nilai: {
    uts: 85,
    uas: 90
  }
};

// destructuring bersarang
const {
  nama,
  nilai: { uas }
} = mahasiswa;

console.log(`${nama} mendapat nilai UAS: ${uas}`);

// study kasus 2
const stateLama = {
  username: "agung123",
  email: "agung@example.com"
};

const stateBaru = {
  ...stateLama,
  email: "agung.new@example.com"
};

console.log(stateBaru);
/*
{
  username: "agung123",
  email: "agung.new@example.com"
}
*/



//study kasus 3
function tampilkanProduk(jenis, ...produk){
  console.log(`jenis: ${jenis}`);
  console.log('daftar produk: ');
  for (let p of produk){
    console.log(`- ${p}`);
  }
}
tampilkanProduk("elektronik", "laptop", "mouse", "keyboard");