let pagination1 = document.querySelector(".group-1");
let pagination2 = document.querySelector(".group-2");
let pagination3 = document.querySelector(".group-3");

function first(){
    pagination1.style.display ="block";
    pagination2.style.display = "none";
    pagination3.style.display = "none";
    document.querySelector(".one").style.backgroundColor="#ffb23b";
    document.querySelector(".two").style.backgroundColor="transparent";
    document.querySelector(".three").style.backgroundColor="transparent";
}

function second(){
    pagination1.style.display ="none";
    pagination2.style.display = "block";
    pagination3.style.display = "none";
    document.querySelector(".one").style.backgroundColor="transparent";
    document.querySelector(".two").style.backgroundColor="#ffb23b";
    document.querySelector(".three").style.backgroundColor="transparent";
}

function third(){
    pagination1.style.display ="none";
    pagination2.style.display = "none";
    pagination3.style.display = "block";
    document.querySelector(".one").style.backgroundColor="transparent";
    document.querySelector(".two").style.backgroundColor="transparent";
    document.querySelector(".three").style.backgroundColor="#ffb23b";
}