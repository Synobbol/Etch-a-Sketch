const container = document.querySelector("#container");

function createDiv(number = 16){
    container.setAttribute("style", `grid-template-columns: repeat(${number}, auto);`)
    // if number < 100 number = prompt();
    for (let index = 0; index < number * number; index++) {
        let divs = document.createElement("div");
        //divs.classList.add("hoverColor");
        divs.setAttribute("style", "border: 1px solid pink;");
        divs.addEventListener("mouseover", addHover );
        divs.addEventListener("mouseout", removeHover );
        
        container.appendChild(divs);
        
    }
}

function addHover(){
    console.log("addHover");
    this.setAttribute("style", "transition: 0.7s; background-color: pink;");
    
}

function removeHover(){
    console.log("removeHover");
    this.setAttribute("style", "transition: 0.7s;");
}

createDiv();