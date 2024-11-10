const toFarenheight=document.getElementById("toFarenheight");
const toCelcius=document.getElementById("toCelcius");
const result=document.getElementById("result");
let temp;

function convert(){
       if(toFarenheight.checked)
       {
        temp=Number(textbox.value);
        temp=temp*9/5 +32;
        result.textContent=temp + "°F";
}
       else if(toCelcius.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp + "°C";
       }
       else{
        result.textContent="Select a unit";
       }

       }
