
function calculatePentagonArea (){
    const p = getInputValueById('pentagon-p');
    const b = getInputValueById('pentagon-b')
    const area = 0.5 * p * b;

    setInnerTextById('pentagon-display', area);
}

