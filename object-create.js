//function declaration

const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(
      `halo ${this.nama}, goblog dahar yeh energi sia ${this.energi}`,
    );
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, goblog maen yeh energi sia ${this.energi}`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`halo ${this.nama}, goblog sare yeh energi sia ${this.energi}`);
  },
};

function Mahasiswa(nama, energi) {
  let Mahasiswa = Object.create(methodMahasiswa);
  Mahasiswa.nama = nama;
  Mahasiswa.energi = energi;

  return Mahasiswa;
}
let dirstyle = Mahasiswa("dirstylee", 10);
let andri = Mahasiswa("andri", 10);
