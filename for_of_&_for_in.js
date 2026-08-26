// for...of

const mhs = ["andri", "jamal", "asep"];

for (const m of mhs) {
  console.log(m);
}

// string

const nama = "andrimiptahparid";

for (const n of nama) {
  console.log(n);
}

// nodelist

const liNama = document.querySelectorAll(".nama");

for (n of liNama) {
  console.log(n.innerHTML);
}

// argument

function jumlahkanAngka() {
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for...in

const mhs1 = {
  nama: "anjs",
  umur: 23,
  asal: "tangerang",
};

for (m in mhs1) {
  console.log(mhs1[m]);
}
