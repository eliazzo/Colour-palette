// Change background color to match selected color

const colorBoxList = document.getElementsByClassName("color-box");
    console.log(colorBoxList);

function changeColorOne(){
    const colorPickerOne = document.getElementById("color-picker-one");
    const newColorOne = colorPickerOne.value;
    colorBoxList[0].style.backgroundColor = newColorOne;
    
}

function changeColorTwo(){
    const colorPickerTwo = document.getElementById("color-picker-two");
    const newColorTwo = colorPickerTwo.value;
    colorBoxList[1].style.backgroundColor = newColorTwo;
}

function changeColorThree(){
    const colorPickerThree = document.getElementById("color-picker-three");
    const newColorThree = colorPickerThree.value;
    colorBoxList[2].style.backgroundColor = newColorThree;
}

function changeColorFour(){
    const colorPickerFour = document.getElementById("color-picker-four");
    const newColorFour = colorPickerFour.value;
    colorBoxList[3].style.backgroundColor = newColorFour;
}

function changeColorFive(){
    const colorPickerFive = document.getElementById("color-picker-five");
    const newColorFive = colorPickerFive.value;
    colorBoxList[4].style.backgroundColor = newColorFive;  
}

// End

// Change color name to match rgb code

const colorNameList = document.getElementsByClassName("color-name");
console.log(colorNameList);

function changeName0(){
    const colorNameOne = document.getElementById("color-one-name");
    const newNameOne = document.getElementById("color-picker-one").value;
    colorNameOne.innerText = newNameOne;

}
function changeName1(){
    colorNameList[1].innerText = document.getElementById("color-picker-two").value;
}
function changeName2(){
    colorNameList[2].innerText = document.getElementById("color-picker-three").value;
}
function changeName3(){
    colorNameList[3].innerText = document.getElementById("color-picker-four").value;
}
function changeName4(){
    colorNameList[4].innerText = document.getElementById("color-picker-five").value;
}

//End

// Lock function
