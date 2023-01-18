const lumpur = document.querySelectorAll(".lumpur");
const babi = document.querySelectorAll(".babi");
const papanSkor = document.querySelector(".papan-skor");

let lumpurSebelumnya;
let selesai;
let skor;

function randomLumpur(lumpur) {
  const l = Math.floor(Math.random() * lumpur.length);
  const lRandom = lumpur[l];
  if (lRandom == lumpurSebelumnya) {
    randomLumpur(lumpur);
  }
  lumpurSebelumnya = lRandom;
  return lRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanBabi() {
  const lRandom = randomLumpur(lumpur);
  const wRandom = randomWaktu(100, 500);
  lRandom.classList.add("muncul");

  setTimeout(() => {
    lRandom.classList.remove("muncul");
    if (!selesai) {
      munculkanBabi();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanBabi();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove("muncul");
  papanSkor.textContent = skor;
}

babi.forEach((b) => {
  b.addEventListener("click", pukul);
});
