const userName=document.querySelector(".nameOfUser");
const btnDisplay=document.querySelector(".btnDisplay");
const displayMsg=document.querySelector(".msg");
const iCount=document.querySelector(".counter");
let greet=Greet();
function displayClick(){
        
    const radLang=document.querySelector("input[name='languageType']:checked");
displayMsg.innerHTML="";
    var itemVal=radLang.value;
   // alert(greet.languageChoice(itemVal))
 displayMsg.innerHTML= greet.languageChoice(itemVal) ;
 
 iCount.innerHTML=greet.inc();
name.value='';
}
btnDisplay.addEventListener("click",displayClick);