let inpu=document.getElementById("inp");
let text=document.getElementById("text");
function Add(){
    if(inpu.value==""){
        alert("Please Enter Task first");
    }
    else{
        let ele= document.createElement('li');
        ele.innerHTML=`${inpu.value}`;
        text.appendChild(ele);
        ele.style.type='1';
        inpu.value="";
        
    }
}