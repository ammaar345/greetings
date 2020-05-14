const userN = document.querySelector(".nameOfUser");
const btnDisplay = document.querySelector(".btnDisplay");
const displayMsg = document.querySelector(".msg");
const iCount = document.querySelector(".counter");
const storedNameState = localStorage["Names"];

let nameState;
if (localStorage["Names"]) {
  nameState =JSON.parse(localStorage['Names'])
   

}

  const greet = Greet(nameState)  ;
  iCount.innerHTML = greet.countNamesStorage();
function displayClick() {
  var name=userN.value;
  const radLang = document.querySelector("input[name='languageType']:checked");
  displayMsg.innerHTML = "";
  var itemVal = radLang.value;
  // alert(greet.languageChoice(itemVal))
  displayMsg.innerHTML = greet.languageChoice(itemVal, name);
  greet.greetCounter(name);
  iCount.innerHTML = greet.countNamesStorage();
   
 var storingNames=greet.nameStorage();
 var nameStrings =  JSON.stringify(storingNames);
localStorage['Names'] = nameStrings;
//alert(greet.greetCounter(name))
  name.value = '';
//  (greet.nameStorage());
}
btnDisplay.addEventListener("click", displayClick);
