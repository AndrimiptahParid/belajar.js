// spread operator
// memecah iterable menjadi single element

//const mhs = ["andri", "jamal", "asep"];
// console.log(...mhs[0]);

// menggabungkan 2 array

//const cc = ["andri", "jamal", "asep"];
//const nama1 = ["liana", "rudi", "asep"];

//const gabung = [...nama, ...nama1];
//console.log(gabung);

// mengcopy array

//const mhs1 = ["andri", "jamal", "asep"];
//const mhs2 = [...mhs1];
//mhs2[0] = "liana";
//console.log(mhs2);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
