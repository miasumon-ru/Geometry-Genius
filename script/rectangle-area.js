console.log('connected')

function calculateRectangleArea (){
    // console.log('hi')

    // get the width of the rectangle

    const widthInputField = document.getElementById('rectangle-width');
    const widthInputText = widthInputField.value;

    const width = parseFloat(widthInputText);
    console.log(width);


    // get the length of the rectangle

    const lengthInputField = document.getElementById('rectangle-length');
    const lengthInputText = lengthInputField.value;

    const length = parseFloat(lengthInputText);
    console.log(length);

    const area = length * width;
    console.log(area)

    // rectangle display

    const displayField = document.getElementById('rectangle-display');
    displayField.innerText = area;


}