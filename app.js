

const createSelectorAndInput = () => {
    var elementJoinSelectors = document.createElement("select");
    elementJoinSelectors.setAttribute("id","selector");
    elementJoinSelectors.setAttribute("class","selectorBox")
    
    /*elementJoinSelectors.setAttribute("onchange" , "getSelectedValue();") */
   
    var categoriesArray = ["Categorias",
                            "Renta",
                            "Comida",
                            "Transporte"]

    for (var i = 0; i < categoriesArray.length; i++) {
    var elementOption = document.createElement("option");
    elementOption.setAttribute("value",categoriesArray[i]);
    elementOption.setAttribute("id", categoriesArray[i])
  
    var contentOption = document.createTextNode(categoriesArray[i]);
    elementOption.appendChild(contentOption);
    elementJoinSelectors.appendChild(elementOption);

  } 

  var elementInput = document.createElement("input");
  elementInput.setAttribute("id","category");
  elementInput.setAttribute("value","");
  elementInput.setAttribute("placeholder","   $ ");

  var contentInput = document.createTextNode("este es el input");
  elementInput.appendChild(contentInput);
 
  var elementAdd = document.createElement("i");
  elementAdd.setAttribute("class","fas fa-plus-circle");
  elementAdd.setAttribute("id","icon2");

  var contentAdd = document.createTextNode("");
  elementAdd.appendChild(contentAdd);
  
  document.getElementById("selector").appendChild(elementJoinSelectors);      
  document.getElementById("input1").appendChild(elementInput); 
  document.getElementById("add1").appendChild(elementAdd); 

}
createSelectorAndInput ();

const showSelector = () => {
      let  selectorWraper = document.getElementById("selector-wraper");
      selectorWraper.style.display = "flex"; 
    
}


document.getElementById("createSelector").addEventListener("click",showSelector);

const addSelectedCategoryAndValue = () => {
 
  let selectedValue = document.getElementById("selector").value;
  console.log(selectedValue);
 
  
  let addedAmount = document.getElementById("category").value;
  let numberAddedAmount = parseInt(addedAmount);
  let elementCategoryAndAmount = document.createElement("div");
  elementCategoryAndAmount.setAttribute("class","print2")
  let elementAmount = document.createElement("p")
  elementAmount.setAttribute("class","monto");

  let contentAmount = document.createTextNode(numberAddedAmount);
  elementAmount.appendChild(contentAmount);
  elementCategoryAndAmount.appendChild(elementAmount);

  document.getElementById("herePrint").appendChild(elementCategoryAndAmount); 

}


const showAddedSelectedCategoryAndValue = document.getElementById("add1")
showAddedSelectedCategoryAndValue.addEventListener("click",addSelectedCategoryAndValue);


let menu = document.getElementById("menu");
    const mostrarMenu = () => {
        menu.classList.toggle("menuOpen");
    }
document.getElementById("bt-menu").addEventListener("click", mostrarMenu);

let pantallaHome = document.getElementById("pantallaHome");
let pantallaObjetivos = document.getElementById("Objectives");  
    const mostrarObjetivos = () => {
        pantallaObjetivos.style.display = "grid";
        pantallaHome.style.display = "none";
        menu.classList.toggle("menuOpen");

    }
document.getElementById("opcionObjectives").addEventListener("click",mostrarObjetivos);


const mostrarHome = () => {
    pantallaHome.style.display = "grid";
    pantallaObjetivos.style.display = "none";

}

document.getElementById("logoILovefin").addEventListener("click",mostrarHome);

