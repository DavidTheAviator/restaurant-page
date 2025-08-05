import "./styles.css"


import { createHomepage } from "./home-page.js";
import { createMenu } from "./recipe-page.js";
import { createContactPage } from "./contact-page.js";



//alert ("Bundling worked");

function navController(){
    
    function clearContent(){
        const contentDiv = document.querySelector("#content");
        contentDiv.innerHTML = "";
    }
    
    
    const homeBtn = document.querySelector("#home");
    const contactBtn = document.querySelector("#contact");
    const menuBtn = document.querySelector("#menu");


    homeBtn.addEventListener("click",()=>{
        clearContent();
        createHomepage();
    })

    menuBtn.addEventListener("click",()=>{
        clearContent();
        createMenu();
    })

    contactBtn.addEventListener("click",()=>{
        clearContent();
        createContactPage();
    })
    

}

navController();
createHomepage();