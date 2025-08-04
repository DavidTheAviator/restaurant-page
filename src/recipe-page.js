import { ElementCreator } from "./utils.js";


//import all images

//image imports for webpack 
import margherita from './imgs/margherita.jpg';
import funghi from './imgs/funghi.jpg';
import tonno from './imgs/tonno.jpg';
import prosciutto from './imgs/ham.jpg';
import diavola from './imgs/salami.jpg';
import formaggi from './imgs/quatro.jpg';
import verdure from './imgs/rucola.jpg';
import speciale from './imgs/special.jpg';

function createRecipeCard(
    itemName,
    ingredients,
    price,
    img,
    imgAlt,
){
    const recipeCardDiv = ElementCreator.createDiv(undefined, "recipe-card",undefined);
    recipeCardDiv.appendChild(ElementCreator.createH(undefined,undefined,itemName,4)); 

    
    const descDiv = ElementCreator.createDiv(undefined,"desc",undefined);
    descDiv.appendChild(ElementCreator.createUl(undefined,undefined,ingredients));
    recipeCardDiv.appendChild(descDiv);

    //to always display two digits
    price = price.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    recipeCardDiv.appendChild(ElementCreator.createDiv(undefined,"price",price + " €"));

    recipeCardDiv.appendChild(ElementCreator.createImg(undefined,undefined,img,imgAlt));

    return recipeCardDiv;

}


function createSmallRecipeCard(
    title,
    items,
    prices
){
    const recipeCardDiv = ElementCreator.createDiv(undefined,"recipe-card-small",undefined);
    recipeCardDiv.appendChild(ElementCreator.createH(undefined,undefined,title,4));
    recipeCardDiv.appendChild(ElementCreator.createUl(undefined,"items",items));

    //to always display two digits
    const formattedPrices = prices.map((price)=>{
        return price.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + " €"; 
    });

    recipeCardDiv.appendChild(ElementCreator.createUl(undefined,"prices",formattedPrices));

    return recipeCardDiv;
}

function createMenu(){


const contentDiv = document.querySelector("#content");

const recipeDiv = ElementCreator.createDiv("recipe-grid",undefined,undefined);
contentDiv.appendChild(recipeDiv);

recipeDiv.appendChild(createRecipeCard(
    "Margherita",
    ["Tomato sauce,", "mozzarella,", "fresh basil,", "olive oil."],
    8.5,
    margherita,
    "Picture of a pizza margherita"
));

recipeDiv.appendChild(createRecipeCard(
    "Funghi",
    ["Garlic-roasted mushrooms,", "mozzarella,", "parsley,", "tomato base."],
    9.5,
    funghi,
    "Picture of a mushroom pizza"
));

recipeDiv.appendChild(createRecipeCard(
    "Tonno e Cipolla",
    ["Sustainable tuna,", "red onion,", "capers,", "black olives, mozzarella."],
    10.0,
    tonno,
    "Picture of a tuna and onion pizza"
));

recipeDiv.appendChild(createRecipeCard(
    "Prosciutto e Rúcula",
    ["Cured ham,", "fresh arugula,", "parmesan,", "mozzarella."],
    11.0,
    prosciutto,
    "Picture of a prosciutto and arugula pizza"
));

recipeDiv.appendChild(createRecipeCard(
    "Diavola",
    ["Spicy salami,", "tomato sauce,", "mozzarella,", "chili oil."],
    10.5,
    diavola,
    "Picture of a spicy Diavola pizza"
));

recipeDiv.appendChild(createRecipeCard(
    "Quattro Formaggi",
    ["Mozzarella,", "gorgonzola,", "parmesan,", "goat cheese."],
    10.0,
    formaggi,
    "Picture of a four cheese pizza"
));

recipeDiv.appendChild(createRecipeCard(
    "Verdure Grigliate",
    ["Grilled zucchini,", "eggplant,", "red pepper,", "red onion."],
    9.5,
    verdure,
    "Picture of a grilled vegetable pizza"
));

recipeDiv.appendChild(createRecipeCard(
    "Speciale Toni",
    ["Rotating seasonal ingredients,", "ask for this week’s recipe."],
    12.0,
    speciale,
    "Picture of the weekly special pizza"
));

recipeDiv.appendChild(createSmallRecipeCard(
    "Beverages",
    [
        "Espresso",
        "Cappuccino",
        "Latte Macchiato",
        "Fresh Orange Juice",
        "Homemade Lemonade",
        "Cola",
        "Still Water (0.5L)",
        "Craft Beer (0.33L)",
        "House Red Wine (Glass)",
        "House White Wine (Glass)"
      ],
      [
        1.80,
        2.50,
        2.80,
        3.00,
        2.50,
        2.00,
        1.50,
        3.20,
        4.00,
        4.00
      ]
    
));

recipeDiv.appendChild(createSmallRecipeCard(
    "Desserts",
    [
      "Tiramisù",
      "Lemon Olive Oil Cake",
      "Dark Chocolate Tart",
      "Affogato"
    ],
    [
      5.00,
      4.50,
      5.50,
      4.00
    ]
  ));



}

export {createMenu};
