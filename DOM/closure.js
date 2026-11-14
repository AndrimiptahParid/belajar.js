function buatCounter(){
    let count = 0;
    //ini adalah closure, karena fungsi yang dikembalikan memiliki akses ke variabel count di luar cakupannya
    return function(){
        count++;
        console.log(`counter ${count}`);
    }
};
const hitung = buatCounter();
hitung();
hitung();
hitung();