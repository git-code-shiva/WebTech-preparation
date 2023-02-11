const box = document.getElementById("rectange-container");
const chengeColor = document.getElementById("changeColor");

const changeBoxColor=()=>{
    box.style.backgroundColor = getRandomColor();
}

const getRandomColor=()=>{
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const addChildFunc=()=>{
    const child = document.createElement("div");
    child.classList.add("child");
    box.appendChild(child);
}

const removeChildFunc=()=>{
    const children = box.querySelectorAll('.child');
    if(children.length > 0){
        box.removeChild(children[children.length-1]);
    }
}