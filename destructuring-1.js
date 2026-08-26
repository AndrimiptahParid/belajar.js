// Destructuring return value
function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const{ bagi, kurang, kali, tambah} = kalkulasi(2, 3);
console.log(bagi);

// Destructuring function argument
 const mhs1 ={
    nama: "andri",
    umur: 21,
    email: "andri@gmail.com"
 }

 function cetakMhs({ nama, umur }){
    return `halo nama saya ${nama} umur saya ${umur} tahun`;
 }
 console.log(cetakMhs(mhs1.nama, mhs1.umur));