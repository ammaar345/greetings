function Greet (){
    var msg;
var iNum=1;
// add a global variable
var namesGreeted = {};
var greetingsCounter=0;
function greetCounter(){
   //when the greet button is pressed check if this user was already greeted before
//by looking if the userName exists in namesGreeted if not increment this counter and update the screen
if (namesGreeted[userName.value] === undefined){
    greetingsCounter++;
    //add an entry for the user that was greeted in the Object Map
    namesGreeted[userName] = 0;
    //update the DOM to display the counter
    return greetingsCounter; 
}

}
    function languageChoice(lang){
        const name=userName.value;
    if (lang==="English"){
        msg="Hello, "+name;
        
    }
        else if (lang==="Afrikaans"){
    msg="Halo, "+name;
    
    }
    
    else if(lang==="Xhosa")
    {
    msg="Molo ,"+name;
    
    } 
    return msg
    }


    return {languageChoice,
greetCounter


}
}