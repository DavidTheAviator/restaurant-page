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
}


export {ElementCreator};