var encrypt = document.getElementById("encrypt");
var input   = document.getElementById("input");
var decrypt = document.getElementById("decrypt");
var output   = document.getElementById("output");

function convert(obj1,obj2){
    let str=obj1.value,tmp,ans="";
    let x1="a".charCodeAt(0)+"z".charCodeAt(0),x2="A".charCodeAt(0)+"Z".charCodeAt(0);
    for(let i=0;i<str.length;i++){
        tmp=str.charCodeAt(i);
        if(tmp>="a".charCodeAt(0)&&tmp<="z".charCodeAt(0))
            tmp=x1-tmp;
        if(tmp>="A".charCodeAt(0)&&tmp<="Z".charCodeAt(0))
            tmp=x2-tmp;
        ans+=String.fromCharCode(tmp);
    }
    obj2.value=ans;
}

encrypt.addEventListener("click",convert.bind(this,input,output))
decrypt.addEventListener("click",convert.bind(this,output,input))