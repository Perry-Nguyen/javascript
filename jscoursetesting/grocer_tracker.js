let grocery1;
let grocery2;
let grocery3;

function sum(){
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    let sumtotal = grocery1 + grocery2 + grocery3;
    
    document.getElementById('result').innerText = `the total amount is ${sumtotal}`;
    

}