let greet = Greet();
const userN = document.querySelector(".nameOfUser");
const btnDisplay = document.querySelector(".btnDisplay");
const displayMsg = document.querySelector(".msg");
const iCount = document.querySelector(".counter");



function displayClick() {
  const radLang = document.querySelector("input[name='languageType']:checked");
  displayMsg.innerHTML = "";
  var itemVal = radLang.value;
  var name = userN.value;
  // alert(greet.languageChoice(itemVal))
  displayMsg.innerHTML = greet.languageChoice(itemVal,name);
  iCount.innerHTML =greet.greetCounter(name);
  //alert(itemVal)
  name.value = '';
  (greet.nameStorage());
}
btnDisplay.addEventListener("click", displayClick);
