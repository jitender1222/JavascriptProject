// let button=document.getElementById('submit');

// let input=document.getElementById('input');

// let qrImg=document.getElementById('img');

// let main=document.getElementById('main');

// button.addEventListener('click',()=>{
    
//     // button.innerText="Generating qr code......";

//     var url=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input.value}`;

//     qrImg.src=url;

//     qrImg.style.display="block";

// })


const main = document.querySelector(".main");
qrInput = main.querySelector(".data");
generateBtn = main.querySelector(".submit");
qrImg = document.querySelector("#img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; // if the input is empty then return from here
  generateBtn.innerText = "Generating QR Code....";
  // getting a QR code of user entered value using the qrserver
  // api and passing the api returned img src to qrimg
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    main.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    main.classList.remove("active");
  }
});