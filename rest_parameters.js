// rest parameter

function myfucy() {
  return [...argument];
}
console.log(myfucy(1, 2, 3, 4, 5));

function jumlahkan(...angka) {
  return angka.reduce((a, b) => a + b);
}
console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring

const kelompok1 = ["joko", "budi", "siti", "ani", "doni"]; 
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

// object destructuring

const team = {
  pm: "dir",
  frontEnd: "budi",
  backEnd: "joko",
  ux: "siti",
  devOps: "doni",
};
const { pm, ...myTeam } = team;
console.log(myTeam);

// filtering

function filterby(type, ...values){
  return values.filter(v => typeof v === type); 
}
console.log(filterby("string", 1, 2, "budi", false, "joko", true, "siti")); 
