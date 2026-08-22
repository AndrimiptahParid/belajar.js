// membuat object literal
let mhs = {
  nama: "Andri",
  umur: 20,
  ips: [3.0, 3.25, 3.5, 3.75],
  alamat: {
    jalan: "Jl. Raya",
    kota: "tangerang",
    provinsi: "banten",
  },
};

let mhs2 = {
  nama: "asep saepudin",
  umur: 25,
  ips: [3.0, 3.25, 3.5, 3.75],
  alamat: {
    jalan: "Jl. Raya",
    kota: "tangerang",
  },
};
// function declaration

function buatObjekMhs(nama, nrp, jurusan, email) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.jurusan = jurusan;
  mhs.email = email;
  return mhs;
}
let mhs3 = buatObjekMhs(
  "andri",
  "16230210016",
  "teknologi informasi",
  "andri@gmail.com",
);

//constructor
function Mahasiswa(nama, nrp, jurusan, email) {
  // let this = {};
  this.nama = nama;
  this.nrp = nrp;
  this.jurusan = jurusan;
  this.email = email; 
  //return this;
}
let mhs4 = new Mahasiswa(
  "andri",
  "16230210016",
  "teknologi informasi",
  "andri@gmail.com",
);
l