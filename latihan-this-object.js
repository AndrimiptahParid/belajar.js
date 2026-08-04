//membuat object

// cara 1 function declaration
function halo() {
  console.log("halo");
}
halo();

// cara 2 object literal
let obj = {};
obj.halo = function () {
  console.log("halo");
};
obj.halo();

// cara 3 constructor
function Halo() {
  console.log("halo");
}
new Halo();

// this
let a = 10;
console.log(window.a);

// cara 1 this function declaration
function halo() {
  console.log(this);
  console.log("halo");
}
this.halo();
// mengembalikan object global

// cara 2 this object literal
let Obj = { a: 10, nama: "andri" };
Obj.halo = function () {
  console.log(this);
  console.log("halo kntl");
};
Obj.halo();
// mengembalikan object yang bersangkutan

// cara 3 this constructor
function Halo() {
  console.log(this);
  console.log("halo");
}
new Halo();
// mengembalikan object yang baru di buat
