console.log('connected')

function calculateParallelogram (){

    // console.log('hi')

     const base = getInputValueById("parallelogram-base")
     console.log(base)
    
     const height = getInputValueById('parallelogram-height')
     console.log(height)

     const area = base * height;

     setInnerTextById('parallelogram-display', area)

    

}

function getInputValueById (inputField){


    const inputFieldById = document.getElementById(inputField);

    const inputValueText = inputFieldById.value;

    const inputValue = parseFloat(inputValueText);

    return inputValue;



}

function setInnerTextById (elementId, result){

    const element = document.getElementById(elementId);
    element.innerText = result;
    
}