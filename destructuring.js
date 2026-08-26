const perkenalan = ["halo", "nama", "saya", "andri"];

// const [salam, satu, dua, nama,] = perkenalan;

// skipping items

const [salam, , , nama] = perkenalan;
console.log(nama);

// swap items

let c = 1;
let d = 2;

console.log(c);
console.log(d);

[c, d] = [d, c];

console.log(c);
console.log(d);

// return value pada function

function coba() {
  return [1, 2];
}

const [z, x] = coba();
console.log(z);

// rest parameter

const [a, ...values] = [1, 2, 3, 4, 5];
console.log(a);
console.log(values);

// destructuring object

const mhs = {
  nama1: "andri",
  umur: 21,
};

const { nama1, umur } = mhs1;
console.log(nama1);

// asignment tanpa deklarasi object

({ nama1, umur } = { nama1: "andri", umur: 21 });
console.log(nama1);

// asign ke variabel baru

const mhs6 = {
  nama: "liana",
  umur: 19,
};

const { nama: n, umur: u } = mhs6;
console.log(n);

// memberikan default value + assign ke variabel baru

const mhs2 = {
  nama: "jamal",
  nim: 1234221,
  email: "jamal@gmail.com",
};
const { nama: na, nim: ni, email: e = "email2@default" } = mhs;
console.log(na);

// rest parameter

const mhs4 = {
  nama: "ronaldo",
  hobi: "mail bola",
};

const { nama3, ...values1 } = mhs4;
console.log(nama3);

// mengambil field pada object, setelah di kirim sebagai parameter object

const mhs1 = {
  id: 12345,
  nama: "andro",
  email: "andro@gmail.com",
};

function getIdMhs({ id, nama }) {
  return nama;
}
console.log(getIdMhs(mhs));
