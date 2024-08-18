const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");


function reset (){
    document.getElementById("countLabel").textContent = 0;
}

function increasehbibi (){
   let  num = document.getElementById("countLabel").textContent;
    num = Number(num)  || 0;
    num++;
    document.getElementById("countLabel").textContent = num;
}

function decreasehbibi (){
    let num = document.getElementById("countLabel").textContent;
    num = Number(num)  || 0; 
    num--;
    document.getElementById("countLabel").textContent = num;
}


increaseBtn.addEventListener("click" , increasehbibi);
decreaseBtn.addEventListener("click" , decreasehbibi);
resetBtn.addEventListener("click" , reset);
//things learned : 
/*
  .value is used to retreive teh value of specific input and not the text content of othe html elments so be careful 
  to decide what will happen after a specif event by teh user simply use event lisetners 
  <label> is mostly used for input boxes 
 */
