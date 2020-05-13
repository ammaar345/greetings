function Greet (){
    var msg;
   // let selectedValue;// if it doesnt work , move it back under the radio button declaration
// add a global variable
var namesGreeted = {};
var greetingsCounter=0;
function greetCounter(userName){
   //when the greet button is pressed check if this user was already greeted before
//by looking if the userName exists in namesGreeted if not increment this counter and update the screen
if (namesGreeted[userName] === undefined){
    greetingsCounter++;
    //add an entry for the user that was greeted in the Object Map
    namesGreeted[userName] = 0;
    //update the DOM to display the counter
     
}
return greetingsCounter;
}

// function checked(){
//     const radLang=document.querySelectorAll("input[name='languageType']");

    
//             for (const rb of radLang) {
//                 if (rb.checked) {
//                     selectedValue = rb.value;
//                     break;
//                 }
//             }
// return selectedValue;
//         };
function nullChecker(text){
var text=userN.value
if (text===""){
    alert("Please enter your name")
}
}
    function languageChoice(name,lang){
        //var name=userN.value;
        if (name!=="" && lang.checked){
            
      if (lang==="English"){
        msg="Hello, "+name;
        greet.greetCounter(name)
    }
        else if (lang==="Afrikaans"){
    msg="Halo, "+name;
    greet.greetCounter(name)
    }
    
    else if(lang==="Xhosa")
    {
    msg="Molo ,"+name;
    greet.greetCounter(name)
    } 
    return msg
    }
     if(name==="" && lang===undefined   )  {
        msg="Please Select a language and/or enter your name.";
        greetingsCounter=greetingsCounter
    }
    return msg
    }


    return {languageChoice,
greetCounter,
//checked


}
}