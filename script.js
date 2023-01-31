const main = document.querySelector("main");
const container = document.querySelector("#container");
const start = document.querySelector(".start");

start.addEventListener("click", () =>{
    let userChoice = Number(window.prompt("How many squares per side for the new grid?"));
    
    if(userChoice < 100 ){
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
    // if number < 100 number = prompt();
    for (let index = 0; index < number * number; index++) {
        let divs = document.createElement("div");
        divs.setAttribute("style", "border: 1px solid pink;");
        divs.addEventListener("mouseover", addHover);
        divs.addEventListener("mouseout", removeHover);
        
        container.appendChild(divs);
        
    }
}

function addHover(){
    console.log("addHover");
    this.setAttribute("style", "transition: 0.7s; background-color: pink; cursor:pointer;");
    
}

function removeHover(){
    console.log("removeHover");
    this.setAttribute("style", "transition: 0.7s; cursor:pointer;");
}