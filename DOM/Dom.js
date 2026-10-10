// DOM SELECTION
// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.fontStyle = "italic";

// document.getElementsByTagName() -> htmlcollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// document.getElementsByClassName() -> htmlcollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari javascript";
