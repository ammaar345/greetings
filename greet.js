const userName=document.querySelector(".nameOfUser");
const btnDisplay=document.querySelector(".btnDisplay");
const displayMsg=document.querySelector(".msg");
function displayClick(){
const name=userName.value;
    displayMsg.innerHTML=name+"bread";
}
btnDisplay.addEventListener("click",displayClick);