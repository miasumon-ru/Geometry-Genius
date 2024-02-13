// console.log('connected')

function calculateTriangleArea() {

    // get the base value

    const triangleBaseInputField = document.getElementById('triangle-base');

    const triangleBaseInputValueText = triangleBaseInputField.value;

    const base = parseFloat(triangleBaseInputValueText)

    console.log(base);

    // console.log(triangleBaseInputField);

    // get the height value

    const heightInputField = document.getElementById('triangle-height')
    const heightInputText = heightInputField.value;

    const height = parseFloat(heightInputText);

    console.log(height)

    const area = 0.5 * base * height;

    console.log('the area of the triangle is :', area);

    // display area in html

    const displayInputField = document.getElementById('triangle-display-area');
    // console.log(displayInputField)

    displayInputField.innerText = area;

}