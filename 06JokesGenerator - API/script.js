let API ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let button=document.querySelector('.btn');
let put=document.querySelector('.joke');

button.addEventListener('click',()=>{
    fetch(API).then((resolve)=> resolve.json()).then((item)=>{
        put.textContent=item.joke;
    })
})
