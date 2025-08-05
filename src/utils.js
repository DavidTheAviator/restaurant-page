class ElementCreator {
    constructor(){}


    static createDiv(idStr='', classStr='', textContent=''){
        const divEl = document.createElement("div");
        if(idStr !== ''){
            divEl.id = idStr;
        }
        if( classStr !== ''){
            divEl.classList.add(classStr);
        }
        if(textContent !== ''){
            divEl.textContent = textContent;
        }


        return divEl;

    }

    static createImg(idStr='', classStr='', src='', alt=''){
        const imgEl = document.createElement("img");
        if(idStr !== ''){
            imgEl.id = idStr;
        }
        if( classStr !== ''){
            imgEl.classList.add(classStr);
        }
        

        if( src=== ''|| alt === ''){
            throw new Error("Imgs must have source and alt defined");
        }

        imgEl.src = src;
        imgEl.alt = alt;

        return imgEl;
    }


    static createUl(idStr='', classStr='', listElements){
        const ulEl = document.createElement("ul");
        if(idStr !== ''){
            ulEl.id = idStr;
        }
        if( classStr !== ''){
            ulEl.classList.add(classStr);
        }

        listElements.forEach((el)=>{
            const liEl = document.createElement("li");
            liEl.textContent = el;
            ulEl.append(liEl);
        })

        return ulEl;
    }


    static createH(idStr='', classStr='', textContent, level){
        const hEl = document.createElement("h" + level);
        if(idStr !== ''){
            hEl.id = idStr;
        }
        if(classStr !== ''){
            hEl.classList.add(classStr);
        }

        hEl.textContent = textContent;

        return hEl;
    }



    static createLabel(idStr='', classStr='', textContent, forField){
        const labelEl = document.createElement("label");
        if(idStr !== ''){
            labelEl.id = idStr;
        }
        if(classStr !== ''){
            labelEl.classList.add(classStr);
        }

        labelEl.textContent = textContent;
        labelEl.for = forField;

        return labelEl;
    }

    static createInput(idStr='', classStr='', name, type){
        const inputEl = document.createElement("input");
        if(idStr !== ''){
            inputEl.id = idStr;
        }
        if(classStr !== ''){
            inputEl.classList.add(classStr);
        }

        inputEl.name = name;
        inputEl.type = type;

        return inputEl;
    }

    static createTextarea(idStr='', classStr='', name){
        const textareaEl = document.createElement("textarea");
        if(idStr !== ''){
            textareaEl.id = idStr;
        }
        if(classStr !== ''){
            textareaEl.classList.add(classStr);
        }

        textareaEl.name = name;

        return textareaEl;
    }

    static createButton(idStr='', classStr='', textContent){
        const buttonEl = document.createElement("button");
        if(idStr !== ''){
            buttonEl.id = idStr;
        }
        if(classStr !== ''){
            buttonEl.classList.add(classStr);
        }

        buttonEl.textContent = textContent;

        return buttonEl;
    }


}


export {ElementCreator};