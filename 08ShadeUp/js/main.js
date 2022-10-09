function randompickerbtn() {
  let hitMe=document.getElementById('randomValuePara');
  let border=document.getElementById('border');
  const digits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  let ans='#';
  for(let i=0;i<6;i++){
    ans+=digits[Math.floor(Math.random()*16)];
  }
  hitMe.innerHTML=ans;
  border.style.backgroundColor=ans;
}

function hexFindbtn() {
  const hexCode=document.getElementById('hexInput').value;
  const colorBox=document.getElementById('color-box');
  colorBox.style.backgroundColor=hexCode;
}

function RGBFindbtn() {
  const rInput=document.getElementById('RInput').value;
  const gInput=document.getElementById('GInput').value;
  const bInput=document.getElementById('BInput').value;
  const colorBox=document.getElementById('rgb-color-box');

  if(rInput > 255 || gInput > 255 || bInput > 255){
    alert("please keep your digits between 0 to 255");
  }
  const rgb = `rgb(${rInput} ,${gInput},${bInput})`;
  colorBox.style.backgroundColor = rgb;
}

function RangeSelector() {
  const red=document.getElementById('RrInput').value;
  const green=document.getElementById('GrInput').value;
  const blue=document.getElementById('BrInput').value;
  const colorBox=document.getElementById('range-color-box');

  const rgb = `rgb(${red} ,${green},${blue})`;
  colorBox.style.backgroundColor = rgb;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  
};

function hexConvbtn() {
  let hexCode=document.getElementById('hexCInp').value;
  let sign=document.querySelector(".hashSign").innerHTML;
  let combine=sign+hexCode;

  let putRGB=document.getElementById('hexCOut');

  const r=parseInt(combine.slice(1,3),16);
  const g=parseInt(combine.slice(3,5),16);
  const b=parseInt(combine.slice(5,7),16);

  let arr=[r,g,b];
  putRGB.innerText=arr;
  
}

function rgbToHex(rgb){
  let hex=Number(rgb).toString(16);
  if(hex.length<2){
    hex='0'+hex;
  }
  return hex;
}

 function rgbConvbtn() {
  const red=document.getElementById('RCInput').value;
  const green=document.getElementById('GCInput').value;
  const blue=document.getElementById('BCInput').value;
  const putRGB=document.getElementById('rgbCOut');

  let changeRed=rgbToHex(red);
  let changeGreen=rgbToHex(green);
  let changeblue=rgbToHex(blue);
   
  let arr=[changeRed + changeGreen + changeblue];
  putRGB.innerText=arr;
 }

