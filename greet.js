const userN=document.querySelector(".nameOfUser");
const btnDisplay=document.querySelector(".btnDisplay");
const displayMsg=document.querySelector(".msg");
const iCount=document.querySelector(".counter");
let greet=Greet();

function displayClick(){

displayMsg.innerHTML="";

    var itemVal=radLang.value;
   // alert(greet.languageChoice(itemVal))
 displayMsg.innerHTML= greet.languageChoice(itemVal) ;
 iCount.innerHTML=greet.greetCounter(userN.value)
alert(itemVal)
 name.value='';
}
btnDisplay.addEventListener("click",checked);
