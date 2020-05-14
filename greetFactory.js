function Greet(initialState) {
    var msg;
    // let selectedValue;// if it doesnt work , move it back under the radio button declaration
    // add a global variable
    var namesGreeted = initialState ? initialState :{};
   // var greetingsCounter = 0;
    function greetCounter(userName) {
        //when the greet button is pressed check if this user was already greeted before
        //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
        if (namesGreeted[userName] === undefined) {
           // greetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            namesGreeted[userName]=1 ;
            //update the DOM to display the counter

        }
//        else if(namesGreeted[userName]===0){
// namesGreeted[userName]=1
//         } 
//         else if (namesGreeted[userName]=1){
//             greetingsCounter=  greetingsCounter;
//             msg="This name has already been added."
//             return msg
//         }
        
    //    return greetingsCounter;
    }

   
function countNamesStorage(){
var namesCount=Object.keys(namesGreeted)
return namesCount.length;
}
function nameStorage(){
    console.log(namesGreeted);
    return namesGreeted;


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

    function languageChoice(lang,name) {
        
        if (lang === "English") {
            msg = "Hello, " + name;

        }
        else if (lang === "Afrikaans") {
            msg = "Halo, " + name;

        }

        else if (lang === "Xhosa") {
            msg = "Molo ," + name;

        }


        return msg
    }
    return {
        languageChoice,
        greetCounter,
        nameStorage,
     
        countNamesStorage

    }
}