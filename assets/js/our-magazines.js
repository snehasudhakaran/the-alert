let prev_content = document.querySelector(".group-1");
let next_content = document.querySelector(".group-2");


function first(){
    prev_content.style.display ="block";
    next_content.style.display = "none";
    document.querySelector(".prev-button").style.backgroundColor="#ffb23b";
    document.querySelector(".next-button").style.backgroundColor="grey";
};

function second(){
    prev_content.style.display ="none";
    next_content.style.display = "block";
    document.querySelector("#prev-button").style.backgroundColor="grey";
    document.querySelector(".next-button").style.backgroundColor="#ffb23b";
};
