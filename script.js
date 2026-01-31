let current = 1;
let scale = 1;

const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");

window.onload = () => {
  audio1.play();
  setTimeout(() => nextPage(), 20000);
};

function nextPage() {
  document.getElementById(`page${current}`).classList.remove("active");
  current++;
  document.getElementById(`page${current}`).classList.add("active");

  audio1.pause();

  if (current === 2) audio2.play();
  if (current === 3) audio3.play();
}

function no() {
  scale += 0.4;
  document.getElementById("yesBtn").style.transform = `scale(${scale})`;

  if (scale > 2) {
    document.getElementById("noBtn").innerText = "Yes";
    document.getElementById("yesBtn").innerText = "Yes babe I love you";
  }
}

function yes() {
  document.getElementById(`page${current}`).classList.remove("active");
  document.getElementById("page4").classList.add("active");
}
