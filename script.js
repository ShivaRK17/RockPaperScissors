let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sciss = document.getElementById("sciss");
let me = document.getElementById("meid");
let compvar = document.getElementById("compid");
let left = document.getElementById("leftscore");
let right = document.getElementById("rightscore");
let reset = document.getElementById("reset");

let user = 'p';
let comp = 'p';
function comprand(){
    let rand = Math.floor(Math.random()*3)+1;
    if(rand==1){
        comp = 'r';
        compvar.style.backgroundImage = "url('img/rockl.jpg')"
    }
    else if(rand==2){
        comp = 'p';
        compvar.style.backgroundImage = "url('img/paperl.jpg')"
    }
    else if(rand==3){
        comp = 's';
        compvar.style.backgroundImage = "url('img/scissorsl.jpg')"
    }
    if(user==comp){
        left.innerText++;
        right.innerText++;
    }
    else if((user=='p'&&comp =='r')||(user=='r' && comp=='s')||(user=='s'&& comp=='p')){
        right.innerText++;
    }
    else{
        left.innerText++;
    }

}

function rockr(){
    me.style.backgroundImage = "url('img/rockr.jpg')"
    user='r';
    comprand();
}
function paperr(){
    me.style.backgroundImage = "url('img/paperr.jpg')"
    user='p';
    comprand();
}
function scissorsr(){
    me.style.backgroundImage = "url('img/scissorsr.jpg')"
    user = 's';
    comprand();
}

rock.addEventListener("click",rockr);
paper.addEventListener("click",paperr);
sciss.addEventListener("click",scissorsr)
reset.addEventListener("click",()=>{
    left.innerText =0;
    right.innerText =0;
})