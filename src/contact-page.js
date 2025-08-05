
import { ElementCreator } from "./utils.js";


function createFormField(
    id_nameStr,
    type, 
    labelStr
){
    const formFieldDiv = ElementCreator.createDiv(undefined,"form-field",undefined);
    
   
    const labelEl = ElementCreator.createLabel(undefined,undefined,labelStr,id_nameStr);
    let inputEl;

    //with textarea
    if(type !== "textarea"){
        inputEl = ElementCreator.createInput(id_nameStr,undefined,id_nameStr,type);
    }
    //with textarea
    else{
        inputEl = ElementCreator.createTextarea(id_nameStr,undefined,id_nameStr);
    }

    

    formFieldDiv.appendChild(labelEl);
    formFieldDiv.appendChild(inputEl);

    return formFieldDiv;
    
}

function createFormRow(
    formFieldList
){
    const formRow = ElementCreator.createDiv(undefined,"form-row",undefined);
    
    formFieldList.forEach((el) => {
        formRow.appendChild(el);
        
    });

    return formRow;
}


function createContactPage(){

const contentDiv = document.querySelector("#content");
const formWrapper = ElementCreator.createDiv(undefined,"form-wrapper",undefined);

contentDiv.appendChild(formWrapper);

const form = document.createElement("form");
form.action = "";
form.method = "post";
formWrapper.appendChild(form);

form.appendChild(
    createFormRow(
        [createFormField("user_firstname","text","First Name"),
         createFormField("user_name","text","Last Name")
        ]
    )
);

form.appendChild(
    createFormRow(
        [createFormField("user_email","email","Email")]
    )
);

form.appendChild(
    createFormRow(
        [createFormField("user_numer","tel","Phone Number")]
    )

);

form.appendChild(
    createFormRow(
        [createFormField("user_message","textarea","Your Message")]    
    )
);

const submitBtn = ElementCreator.createButton(undefined,undefined,"Submit");

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    form.reset();
    alert("This is not connected and just resets the form :)");
});


form.appendChild(
    createFormRow(
        [submitBtn]
    )
);



}


export {createContactPage};





