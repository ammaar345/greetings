function Greet (){
    var msg;
var iNum=1;
function inc(){
   return  iNum++
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
inc


}
}