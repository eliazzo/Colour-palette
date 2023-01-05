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

// Change color name to match hex code

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

// function lockColor(){
//     const lockList = document.getElementsByClassName("lock");
//     console.log(lockList);
//     const newColorOne = document.getElementById("color-picker-one").value;
//     const 

//     if (newColorOne === colorPickerOne.value)


// }


// Random color generator on spacebar

function randomColor(){
    const randomColor0 = Math.floor(Math.random()*16777215).toString(16);
    colorBoxList[0].style.backgroundColor = '#' + randomColor0;
    colorNameList[0].innerText = '#' + randomColor0;

    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    colorBoxList[1].style.backgroundColor = '#' + randomColor1;
    colorNameList[1].innerText = '#' + randomColor1;

    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    colorBoxList[2].style.backgroundColor = '#' + randomColor2;
    colorNameList[2].innerText = '#' + randomColor2;

    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    colorBoxList[3].style.backgroundColor = '#' + randomColor3;
    colorNameList[3].innerText = '#' + randomColor3;

    const randomColor4 = Math.floor(Math.random()*16777215).toString(16);
    colorBoxList[4].style.backgroundColor = '#' + randomColor4;
    colorNameList[4].innerText = '#' + randomColor4;


// Set color picker to match background color

    const colorPickerList = document.getElementsByClassName("color-picker");
    console.log(colorPickerList);

    // for (let i = 0; i < colorPickerList; i++){
    //     colorPickerList[i].value = '#' + randomColor[i]
    // }

    document.getElementById("color-picker-one").value = '#' + randomColor0;
    document.getElementById("color-picker-two").value = '#' + randomColor1;
    document.getElementById("color-picker-three").value = '#' + randomColor2;
    document.getElementById("color-picker-four").value = '#' + randomColor3;
    document.getElementById("color-picker-five").value = '#' + randomColor4;

// End
}



// End