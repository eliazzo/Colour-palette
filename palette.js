const colorBoxList = document.getElementsByClassName("color-box");

const colorPickerListAlt = document.querySelectorAll(".color-picker");;

// Change background color to match manually selected colors
function changeColorManual(){
    const newColor0 = document.getElementById("color-picker-one").value;
    const newColor1 = document.getElementById("color-picker-two").value;
    const newColor2 = document.getElementById("color-picker-three").value;
    const newColor3 = document.getElementById("color-picker-four").value;
    const newColor4 = document.getElementById("color-picker-five").value;

    const newColorArr = [newColor0, newColor1, newColor2, newColor3, newColor4];

    for (let i = 0; i < colorBoxList.length; i++){
        colorBoxList[i].style.backgroundColor = newColorArr[i];
    }
}

// Display hex code when manually selected

const colorDisplayList = document.getElementsByClassName("color-name");
console.log(colorDisplayList);

function changeNameManual(){

    const newColor0 = document.getElementById("color-picker-one").value;
    const newColor1 = document.getElementById("color-picker-two").value;
    const newColor2 = document.getElementById("color-picker-three").value;
    const newColor3 = document.getElementById("color-picker-four").value;
    const newColor4 = document.getElementById("color-picker-five").value;

    const newColorArr = [newColor0, newColor1, newColor2, newColor3, newColor4];

    for ( let i = 0; i < colorDisplayList.length; i++){
        colorDisplayList[i].innerText = newColorArr[i];
    }
}


// Lock function

function lockColor(){}

const lockList = document.querySelectorAll(".lock");
console.log(lockList);

for (let i = 0; i < lockList.length; i ++){

    console.log("hello");
    // For each lock item clicked, prevent randomColor

}


// Random color generator on click

function randomColor(){


    const colorPickerList = document.querySelectorAll(".color-picker");
    console.log(colorPickerList);

    
    const randomColor0 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor4 = Math.floor(Math.random()*16777215).toString(16);

    const randomColorArr = [randomColor0, randomColor1, randomColor2, randomColor3, randomColor4];

// Set color picker to match background color

    for (let i = 0; i < colorBoxList.length; i++){
        colorBoxList[i].style.backgroundColor = '#' + randomColorArr[i];
    }

    for (let i = 0; i < colorPickerList.length; i++){
        colorPickerList[i].value = '#' + randomColorArr[i]
    }

// Display hex code of randomly generated colors

    for (let i = 0; i < colorDisplayList.length; i++){
        colorDisplayList[i].innerText = '#' + randomColorArr[i];
    }

}



