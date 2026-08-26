d; // templat literal

const nama = "andri miptah parid";
const umur = 21;
const alamat = "tangerang";

console.log(
  ` halo ${nama} umur lu ${umur} ya, kalo alamat lu di ${alamat} ya!!`,
);

//embeded expresion

const x = 20;
console.log(`${x % 2 == 0 ? "benar" : "salah"}`);

// HTML fragmen

const mhs = {
  nama: "andri",
  umur: 21,
  alamat: "tangerang",
};

const el = `<div>
            <h2>${mhs.nama}</h2>
            <span>${mhs.umur}</span>
            <span>${mhs.alamat}</span>
        </div`;

const mhs1 = [
  {
    nama: "andri",
    alamat: "tangerang",
  },
  {
    nama: "asep",
    alamat: "garut",
  },
  {
    nama: "rudi",
    alamat: "jakarta",
  },
];

const el1 = `<div class="mhs">
    ${mhs1
      .map(
        (m) => `<ul>
        <li>${m.nama}</li>
        <li>${m.alamat}</li>
        </ul>`,
      )
      .join(" ")}
</div>`;

const lagu = [
  {
    judul: "sia anying",
    penyanyi: "andri",
    feat: "xpunk",
  },
];

const el2 = `<div class="lagu>
<ul>
 <li>${lagu.judul}</li>
 <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""} </li>
</ul>

</div>`;

// nested
// html fragment bersarang

const mhs2 = [
  {
    nama: "andri",
    nim: 1234567890,
    smt: 5,
    mataKuliah: [
      "pemrograman web",
      "sistem digital",
      "algoritma & struktur data",
      "komputasi numerik",
    ],
  },
];

function cetakmataKuliah(mataKuliah) {
  return `
    <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join(" ")}`;
}

const el3 = `<div class="mhs">
   <h2>${mhs.nama}</h2>
   <span class="semester">${mhs.smt}</span>
   <h4>${mhs.nim}</h4>
   <h4> mata kuliah :</h4>
   ${cetakmataKuliah(mhs.mataKuliah)}
   
</div>`;

document.body.innerHTML = el;
