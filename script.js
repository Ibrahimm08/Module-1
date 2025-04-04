"use strict";

function showhideDetails(){
    let Contacts=document.getElementById("Contacts");
    if (Contacts.style.opacity==0){
        Contacts.style.opacity=1;
    }else{
        Contacts.style.opacity=0;
    }
}


function openForm() {
    document.getElementById("myform").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myform").style.display = "none";
}