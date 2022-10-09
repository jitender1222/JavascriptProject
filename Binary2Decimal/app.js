const binary=document.getElementById('binary');
const result=document.querySelector('.result');
const form=document.querySelector('.container');
const newDiv=document.createElement('span');
result.append(newDiv);

function binaryToDecimal(v) {
    // let binary = '';
    // if(typeof v == 'string') {
    //   binary = v.split();
    // } else {
    //     binary = v.toString().split();
    // }
    // let decimal = 0;
    // for(let i = 0; i < binary.length; i++) {
    //     decimal = (decimal * 2) + binary[i];
    // }
    return parseInt(v,2);
  }

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let decimal=binaryToDecimal(binary.value);
    newDiv.innerText=decimal;
})

