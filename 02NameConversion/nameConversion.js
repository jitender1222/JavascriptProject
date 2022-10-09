const camel=document.getElementById('camel-case');
const pascal=document.getElementById('pascal-case');
const snake=document.getElementById('snake-case');
const screaming=document.getElementById('screaming-snake-case');
const kebab=document.getElementById('kebab-case');
const screamingKebab=document.getElementById('screaming-kebab-case');

const submit=document.getElementById('convert-btn');

const text=document.getElementById('text');


submit.addEventListener('click',done);


function camell(get){
    var len=get.length;

    let str=" ";

    for(let i=0;i<len;i++){
        if(get[i]==" "){
            str+=get[i+1].toUpperCase();
            i++;
        }
        else{
            str+=get[i];
        }
    }
    return str;
}


function pascall(get){
    var space=" ";

    const sp=get.split(" ");

    for(var i=0;i<sp.length;i++){
        sp[i]=sp[i].charAt(0).toUpperCase() + sp[i].slice(1);
    }

    const str2=sp.join(" ");

    var len=str2.length;
    
    for(var i=0;i<len;i++){
        if(str2[i]==" "){
            space+=str2[i+1].toUpperCase();
            i++;
        }
        else{
            space+=str2[i];
        }
    }
    return space;
}

function snakee(get){
    var len=get.length;

    var str=" ";

    for(var i=0;i<len;i++){
        if(get[i]==" "){
            str+="_";
        }
        else{
            str+=get[i];
        }
    }
    return str;
}

function screamingsnakee(get){
    var len=get.length;

    var str=" ";

    for(var i=0;i<len;i++){
        if(get[i]==" "){
            str+="_";
        }
        else{
            str+=get[i];
        }
    }
    return str.toUpperCase();
}

function kebabb(get){
    var len=get.length;

    var str=" ";

    for(var i=0;i<len;i++){
        if(get[i]==" "){
            str+="-";
        }
        else{
            str+=get[i];
        }
    }
    return str;
}

function screamingkebabb(get){
    var len=get.length;

    var str=" ";

    for(var i=0;i<len;i++){
        if(get[i]==" "){
            str+="-";
        }
        else{
            str+=get[i];
        }
    }
    return str.toUpperCase();
}




function done(){
    const get=document.getElementById('text').value;
    camel.innerText=camell(get);

    pascal.innerText=pascall(get);

    snake.innerText=snakee(get);

    kebab.innerText=kebabb(get);

    screaming.innerText=screamingsnakee(get);

    screamingKebab.innerText=screamingkebabb(get);
}


