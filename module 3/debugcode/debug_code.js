    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = new Array();
                    result.push(multiply(num1,num2));
                    result.push(addition(num1,num2));
                    result.push(division(num1,num2));
                    // Display the result
                    displayResult(result[0],result[1],result[2]);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }
            function addition(a,b){
                debugger;
                return a+b;
            }
            function division(a,b){
                debugger;
                return a/b;
            }
            function displayResult(multiply, addition, division) {
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The result for multiplication is: ${multiply}\n` +
                                `The result for addition is: ${addition}\n` +
                                `The result for division is: ${division}`;
            }

        