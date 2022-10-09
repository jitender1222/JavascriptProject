let rock=document.getElementById('r');
let paper=document.getElementById('p');
let scissor=document.getElementById('s');
let user=document.getElementById('result-user-stat');
let comp=document.getElementById('result-comp-stat');
let winner=document.getElementById('result-final-stat');
let userscore=document.getElementById('userScoreVal');
let compvalue=document.getElementById('compScoreVal');



let innerUser=document.createElement('span');
user.appendChild(innerUser);

let innerComp=document.createElement('span');
comp.appendChild(innerComp);


let innerWin=document.createElement('span');
winner.appendChild(innerWin);


let arr=['rock','paper','scisscor'];

function computer(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}


rock.addEventListener('click',()=>{
    innerUser.innerText='rock';

    let compValue=computer(arr);
    innerComp.innerText=compValue;

    if(compValue==='paper'){
        compvalue.innerHTML++;
        innerWin.innerHTML='Computer wins';
    }
    else if(compValue ==='scisscor'){
        userscore.innerHTML++;
        innerWin.innerHTML= "User wins";
    }
    else {
        innerWin.innerHTML="tie";
    }
    
})  


paper.addEventListener('click',()=>{
    innerUser.innerText='paper';

    let compValue=computer(arr);
    innerComp.innerText=compValue;

    if(compValue==='scisscor'){
        compvalue.innerHTML++;
        innerWin.innerHTML='Computer wins';
    }
    else if(compValue ==='rock'){
        userscore.innerHTML++;
        innerWin.innerHTML= "User wins";
    }
    else {
        innerWin.innerHTML="tie";
    }
})  


scissor.addEventListener('click',()=>{
    innerUser.innerText='scissor';

    let compValue=computer(arr);
    innerComp.innerText=compValue;

    if(compValue==='rock'){
        compvalue.innerHTML++;
        innerWin.innerHTML='Computer wins';
    }
    else if(compValue ==='paper'){
        userscore.innerHTML++;
        innerWin.innerHTML= "User wins";
    }
    else {
        innerWin.innerHTML="tie";
    }
})  