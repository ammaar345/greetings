  let nameState;
if (localStorage["Names"]) {
  nameState = JSON.parse(localStorage['Names'])


}
const greet = Greet(nameState);

const userN = document.querySelector(".nameOfUser");
const btnDisplay = document.querySelector(".btnDisplay");
const displayMsg = document.querySelector(".msg");
const iCount = document.querySelector(".counter");
const storedNameState = localStorage["Names"];
let language="";
let name=""
///
///
///
iCount.innerHTML = greet.countNamesStorage();
///
function displayClick() {
  var name = userN.value;
  const radLang = document.querySelector("input[name='languageType']:checked");
 
if (radLang){
language=radLang.value;
}

  displayMsg.innerHTML = "";
  //var itemVal = radLang.value;
  // alert(greet.languageChoice(itemVal))
  //greet.validate();
  displayMsg.innerHTML=greet.validate(language,name);
  displayMsg.innerHTML = greet.languageChoice(language, name);
  greet.greetCounter(name);
  iCount.innerHTML = greet.countNamesStorage();
 // greet.languageChoice(itemVal, name);
  var storingNames = greet.nameStorage();
  var nameStrings = JSON.stringify(storingNames);
  localStorage['Names'] = nameStrings;
  //alert(greet.greetCounter(name))

  userN.value = '';
  //  (greet.nameStorage());
}
btnDisplay.addEventListener("click", displayClick);
