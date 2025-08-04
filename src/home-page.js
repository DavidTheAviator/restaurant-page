import { ElementCreator } from "./utils.js";


//image imports for webpack 
import toniVillage from "./imgs/toni-village.jpg";
import tomatoes from "./imgs/tomatoes.jpg";
import childrenPizza from "./imgs/children-pizza.jpg";
import pizzeria from "./imgs/pizzeria.jpg";




//insert everything at the content div
function createHomepage(){

    const contentDiv = document.querySelector("div#content");
    const contentDivGrid = ElementCreator.createDiv("home-grid",undefined,undefined);

    contentDiv.appendChild(contentDivGrid);

    contentDivGrid.appendChild(ElementCreator.createDiv("introduction-toni","left-para",
        `Toni opened this place in 1972 with a wood-fired oven, a few folding chairs, 
        and dough that took two days to ferment. 
        He believed in simple things done right. 
        He sourced tomatoes from the farm outside town and mozzarella from a neighbor who made it fresh. 
        People came in for the pizza but stayed because they felt welcome.`));
    contentDivGrid.appendChild(ElementCreator.createImg("toni-village", undefined,
        toniVillage,"Italian Village (Hometown of Toni)"
    ));
    contentDivGrid.appendChild(ElementCreator.createImg("tomatoes", undefined,
        tomatoes,"Picture of Tomatoes on the plant"
    ));
    contentDivGrid.appendChild(ElementCreator.createDiv("seasonal-local-eco","right-para",
        `Three generations later, we still do it the same way. The dough rests for 48 hours. 
        The sauce is made each morning. We chop vegetables and grate cheese by hand. 
        Every ingredient we use is local, seasonal, and grown without chemicals. We don’t cut corners. 
        We don’t freeze anything. We bake everything fresh, every day.`)
    );
    contentDivGrid.appendChild(ElementCreator.createDiv("today-toni","left-para",
        ` We’re still in the same spot. The oven has been replaced, but not the spirit. 
        Some of our regulars have been coming here since they were kids. Now they bring their kids.
        Toni’s has always been more than a pizzeria. It’s a meeting point. 
        A place where the neighborhood gathers, talks, and celebrates.`));

    contentDivGrid.appendChild(ElementCreator.createImg("children-pizza", undefined,
        childrenPizza,"Chilrden eating pizza"
    ));
    contentDivGrid.appendChild(ElementCreator.createImg("pizzeria", undefined,
        pizzeria,"Picture of a pizza restaurant in the city"
    ));




    const philosophyDiv = ElementCreator.createDiv("toni-philosophy","right-para",undefined);
    const philosophyUl = ElementCreator.createUl(undefined,undefined,['We host small events.',
        'We welcome everyone.',
        'No dress code.',
        'No reservations.',
        'Just good food and open doors.'

    ])

    philosophyDiv.appendChild(philosophyUl);
    contentDivGrid.appendChild(philosophyDiv);



    contentDivGrid.appendChild(ElementCreator.createDiv("toni-call-to-action",undefined,
        ` If you're nearby, come in. You’ll smell the crust before you see the sign.`));

    }


export {createHomepage};






