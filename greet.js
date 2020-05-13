let greet=Greet();
const userN=document.querySelector(".nameOfUser");
const btnDisplay=document.querySelector(".btnDisplay");
const displayMsg=document.querySelector(".msg");
const iCount=document.querySelector(".counter");



function displayClick(){
  const radLang=document.querySelector("input[name='languageType']");
displayMsg.innerHTML="";
var itemVal=radLang.value;
var name=userN.value;
   // alert(greet.languageChoice(itemVal))
 displayMsg.innerHTML= greet.languageChoice(name,itemVal) ;
 iCount.innerHTML=greet.greetCounter(name)
//alert(itemVal)
 name.value='';
}
btnDisplay.addEventListener("click",displayClick);
