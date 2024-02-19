let arrTrue = [true, true, true, true];
let arrFalse = [false, false, false, false];
let arrRemainder = [true, true, true];
function toggleText(n) {
  const visible = document.getElementsByClassName("hidden");
  const buttonImg = document.getElementsByClassName("button-img");
  visible[n].classList.toggle("visible");
  arrRemainder[n] = arrTrue[n];
  arrTrue[n] = arrFalse[n];
  arrFalse[n] = arrRemainder[n];

  if (arrTrue[n] == true) {
    buttonImg[n].src = "./assets/images/icon-plus.svg";
  } else {
    buttonImg[n].src = "./assets/images/icon-minus.svg";
  }
}
