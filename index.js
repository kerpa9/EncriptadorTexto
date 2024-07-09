// Encriptación

const valorText = function (valorText) {
  let arrayText = [];
  const $text2 = document.getElementById("text");
  let textdesc = valorText.trim().toLowerCase();
  for (let i = 0; i < textdesc.length; i++) {
    arrayText.push(
      textdesc[i]
        .replace("e", "enter")
        .replace("i", "imes")
        .replace("a", "ai")
        .replace("o", "ober")
        .replace("u", "ufat")
    );
  }
  let newText = arrayText.join("");
  $text2.innerHTML = newText;
  // console.log(newText);
};
//
//

//Desencriptación

//
//
//
// Manejo de encriptación mediante botón

const handleEncrip = function () {
  const $textA = document.querySelector(".card_textarea");
  const $textB = document.querySelector(".text1");
  // const $encript = document.getElementById("encrip");
  $textA.setAttribute("class", "text");
  $textB.setAttribute("class", "text11");

  // console.log($textA);
};
//
//
//
// Manejo de desencriptación mediante botón

const handleDesencrip = function () {
  // const $atributte = document
  //   .getElementsByTagName("textarea")[0]
  //   .setAttribute("onkeyup", "valorText1(this.value)");

  // const $textA = document.querySelector(".card_textarea");
  // const $textB = document.querySelector(".text1");
  // // $textA.setAttribute("class", "text");
  // $textB.setAttribute("class", "text11");
  // console.log($textA);
  const $text1 = document.getElementById("text");
  const $text2 = document.getElementById("text1").value;
  // let textdesc = valorText1.trim().toLowerCase();

  let textEncrip = $text2
    .toString()
    .replace(/ufat/gi, "u")
    .replace(/ober/gi, "o")
    .replace(/imes/gi, "i")
    .replace(/enter/gi, "e")
    .replace(/ai/gi, "a");

  const $textB = document.querySelector("#text");
  const $cardArea = document.querySelector(".text11");
  $cardArea.setAttribute("class", "text");

  console.log(textEncrip);
  $textB.innerHTML = textEncrip;
};
//
//
//
// const valorText1 = function (valorText1) {
//   let arrayText = [];
//   const $text2 = document.getElementById("text").value;
//   // let textdesc = valorText1.trim().toLowerCase();

//   let textEncrip = $text2
//     .replace("ai", "a")
//     .replace("ufat", "u")
//     .replace("ober", "o")
//     .replace("imes", "i")
//     .replace("enter", "e");

//   $text2.innerHTML = textEncrip;
//   console.log(textEncrip);
// };
// // Manejo de copia

const handleCopy = function () {
  const $textB = document.querySelector("#text").value;
  return $textB;
};

const copybtn = async function () {
  let txt = handleCopy(),
    $textB = document.querySelector(".text11"),
    $textA = document.querySelector(".text");
  $textB.setAttribute("class", "text1");
  $textA.setAttribute("class", "text11");

  await navigator.clipboard.writeText(txt);
};

let $btn = document.querySelector("#copy");

$btn.addEventListener("click", copybtn);
