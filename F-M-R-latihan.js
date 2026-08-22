// ambil semua
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih yang hanya JAVASCRIPT LANJUTAN
let jslanjut = videos
  .filter((video) => video.textContent.includes("javascript-lanjutan"))

  // ambil durasi masing masing vidio
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi int , ubah menit menjadi detik
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah fromat nya jadi jam menit detik
const jam = Math.floor(jslanjut / 3600);
jslanjut = jslanjut - jam + 3600;

const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60;

// simpan di DOM

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;
const jmlhVideo = videos.filter((video) =>
  video.textContent.includes("javascript-lanjutan"),
).length;
const pjmlhVideo = document.querySelector(".jumlah-vidio");
pjmlhVideo.textContent = `${jmlhVideo} vidio.`;

console.log(jam);
