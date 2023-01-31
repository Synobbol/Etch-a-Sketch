const container = document.querySelector("#container");
const main = document.querySelector("main");
const start = document.querySelector(".start");



start.addEventListener("click", () =>{
   
    let userChoice = Number(window.prompt("How many squares per side for the new grid?"));

    if(userChoice < 100 ){
        removeDiv();
        createDiv(userChoice);
        
    }
    else{
        container.textContent = "ERROR: number of squares must be under 100!";
        container.style.color = "red";
        return main.appendChild(container);
    }
});

function createDiv(number = 16){
    container.setAttribute("style", `grid-template-columns: repeat(${number}, auto);`)
   
    for (let index = 0; index < number * number; index++) {
        let divs = document.createElement("div");

        divs.setAttribute("style", "border: 1px solid pink;");
        divs.addEventListener("mouseover", addHover);
        
        container.appendChild(divs);
    }
}

function addHover(){
    this.setAttribute("style", "transition: 0.7s; background-color: pink; cursor:pointer;");
    
}

function removeDiv(){
    container.textContent = "";
}
