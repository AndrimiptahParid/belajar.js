const nama1 = "andrimiptahparid";
const umur1 = 21;

function coba(string, ...values) {
  return string.reduce(
    (result, str, i) => `${result}${str}${values[i] || " "}`,
    " ",
  );
}

const str1 = coba` halo nama saya ${nama} dan umur saya ${umur}`;
console.log(str);

// highlight
const nama = "andrimiptahparid";
const umur = 21;
const email = "andri@gmail.com";

function highlight(string, ...values) {
  return string.reduce(
    (result, str, i) =>
      `${result}${str}<span class=hl>${values[i] || " "}</span>`,
    " ",
  );
}

const str = highlight` halo nama saya ${nama} dan umur saya ${umur} email saya ${email}`;
document.body.innerHTML = str;
