// object literal
// problem: tidak efektif untuk object yang banyak
let mahasiswa = {
  nama: "andri",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(
      `halo ${this.nama}, gera dahar atuh, energi sia kuari ${this.energi}`,
    );
  },
};

//function declaration

function Mahasiswa(nama, energi) {
  let Mahasiswa = {};
  Mahasiswa.nama = nama;
  Mahasiswa.energi = energi;

  Mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(
      `halo ${this.nama}, goblog dahar yeh energi sia ${this.energi}`,
    );
  };

  Mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, goblog maen yeh energi sia ${this.energi}`);
  };
  return Mahasiswa;
}
let dirstyle = Mahasiswa("dirstylee", 10);
let andri = Mahasiswa("andri", 10);

// constructor function

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(
      `halo ${this.nama}, goblog dahar yeh energi sia ${this.energi}`,
    );
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, goblog maen yeh energi sia ${this.energi}`);
  };
}
let dirstylee = new Mahasiswa("dirstylee", 10);
