
const colorBoxList = document.getElementsByClassName("color-box");


// Change background color to match manually selected colors
function changeColorManual(){
    const newColor0 = document.getElementById("color-picker-0").value;
    const newColor1 = document.getElementById("color-picker-1").value;
    const newColor2 = document.getElementById("color-picker-2").value;
    const newColor3 = document.getElementById("color-picker-3").value;
    const newColor4 = document.getElementById("color-picker-4").value;

    const newColorArr = [newColor0, newColor1, newColor2, newColor3, newColor4];

    for (let i = 0; i < colorBoxList.length; i++){
        colorBoxList[i].style.backgroundColor = newColorArr[i];
    }
}

// Display hex code when manually selected
const colorDisplayList = document.getElementsByClassName("color-name");
console.log(colorDisplayList);

function changeNameManual(){
    const newColor0 = document.getElementById("color-picker-0").value;
    const newColor1 = document.getElementById("color-picker-1").value;
    const newColor2 = document.getElementById("color-picker-2").value;
    const newColor3 = document.getElementById("color-picker-3").value;
    const newColor4 = document.getElementById("color-picker-4").value;

    const newColorArr = [newColor0, newColor1, newColor2, newColor3, newColor4];

    for ( let i = 0; i < colorDisplayList.length; i++){
        colorDisplayList[i].innerText = newColorArr[i];
    }
}

// Lock functions

//Color-box-0
function lock0(){
    document.getElementById("color-box-0").dataset.status = "locked"
    console.log("locked0")
}
function unlock0(){
    document.getElementById("color-box-0").dataset.status = "unlocked"
    console.log("unlocked0")
}
function callLock0(){
    if (document.getElementById("color-box-0").dataset.status === "unlocked"){
        lock0();
    } else {
        unlock0();
    }
}


//Color-box-1
function lock1(){
    document.getElementById("color-box-1").dataset.status = "locked"
    console.log("locked1")
}
function unlock1(){
    document.getElementById("color-box-1").dataset.status = "unlocked"
    console.log("unlocked1")
}
function callLock1(){
    if (document.getElementById("color-box-1").dataset.status === "unlocked"){
        lock1();
    } else {
        unlock1();
    }
}

//Color-box-2
function lock2(){
    document.getElementById("color-box-2").dataset.status = "locked"
    console.log("locked2")
}
function unlock2(){
    document.getElementById("color-box-2").dataset.status = "unlocked"
    console.log("unlocked2")
}
function callLock2(){
    if (document.getElementById("color-box-2").dataset.status === "unlocked"){
        lock2();
    } else {
        unlock2();
    }
}

//Color-box-3
function lock3(){
    document.getElementById("color-box-3").dataset.status = "locked"
    console.log("locked3")
}
function unlock3(){
    document.getElementById("color-box-3").dataset.status = "unlocked"
    console.log("unlocked3")
}
function callLock3(){
    if (document.getElementById("color-box-3").dataset.status === "unlocked"){
        lock3();
    } else {
        unlock3();
    }
}
//Color-box-4
function lock4(){
    document.getElementById("color-box-1").dataset.status = "locked"
    console.log("locked4")
}
function unlock4(){
    document.getElementById("color-box-1").dataset.status = "unlocked"
    console.log("unlocked4")
}
function callLock4(){
    if (document.getElementById("color-box-4").dataset.status === "unlocked"){
        lock4();
    } else {
        unlock4();
    }
}


// Random color generator on click
function randomColor(){

    const colorPickerList = document.querySelectorAll(".color-picker");
    
    const randomColor0 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor4 = Math.floor(Math.random()*16777215).toString(16);

    const randomColorArr = [randomColor0, randomColor1, randomColor2, randomColor3, randomColor4];


// According to locked/unlocked status
    for (let i = 0; i < colorBoxList.length; i++){
        if(colorBoxList[i].dataset.status === "locked"){
        console.log("locked");
        continue;
        }
        
        
        else (colorBoxList[i].dataset.status === "unlocked") 
            console.log("unlocked");
         // Set background color to match randomly generated color
            colorBoxList[i].style.backgroundColor = '#' + randomColorArr[i];
    
         // Set color picker to match background color
            colorPickerList[i].value = '#' + randomColorArr[i];
         
         // Display hex code of randomly generated colors
            colorDisplayList[i].innerText = randomColorArr[i]; 
        
    }
}

document.addEventListener("keypress", randomColor);
