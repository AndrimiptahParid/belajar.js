//const nama = document.querySelector("#nama");
//const umur = document.querySelector("#umur");
//const judul = document.querySelector("#judul");
//const harga = document.querySelector("#harga");
//const stok = document.querySelector("#stok");
//nama.textContent = "andri miftah farid";
//umur.textContent = "21 tahun";
//judul.textContent = "laptop";
//harga.textContent = "Rp. 8.000.000";
//stok.textContent = "10";

//const namaProduk = document.querySelector("#namaProduk");
//const ValueProduk = document.querySelector("#ValueProduk");
//const jumlahProduk = document.querySelector("#jumlahProduk");
//const totalProduk = document.querySelector("#totalProduk");

//const value = 5000000;
//const jumlah = 2;
//const total = value * jumlah;

//namaProduk.textContent = "Laptop";
//ValueProduk.textContent = `harga: Rp.${value}`;
//jumlahProduk.textContent = `jumlah: ${jumlah}`;
//totalProduk.textContent = `total: Rp.${total}`;

const produk = document.querySelector("#Produk");
const harga1 = document.querySelector("#harga1");
const jumlah = document.querySelector("#jumlah");
const diskon = document.querySelector("#diskon");
const total = document.querySelector("#total");

const hargaProduk = 7500000;
const jumlahProduk = 3;
const diskonProduk = 10;

const hargaAwal = hargaProduk * jumlahProduk;
const besarDiskon = (hargaAwal * diskonProduk) / 100;
const hargaAkhir = hargaAwal - besarDiskon;

produk.textContent = "Laptop";
harga1.textContent = `harga: Rp.${hargaProduk}`;
jumlah.textContent = `jumlah: ${jumlahProduk}`;
diskon.textContent = `diskon: ${diskonProduk}%`;
total.textContent = `total: Rp.${hargaAkhir}`;
