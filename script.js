    let form = document.querySelector('#calculatorForm');
    let resultDiv = document.querySelector('#result');
    let showLink = document.querySelector('#showCalculator');
    let hideLink = document.querySelector('#hideCalculator');
    let operation = document.querySelector('.operation');
    let nombres = document.querySelector('.nombres');
    let info1 = document.querySelector('#info1');
    let info2 = document.querySelector('#info2');

    document.querySelector('#calculateButton').addEventListener('click', function () {
        let operation = form.querySelector('#operation').value;
        let number1 = form.querySelector('#num1').value;
        let number2 = form.querySelector('#num2').value;
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
        let result;
        switch (operation) {
            case 'addition':
                result = number1 + number2;
                break;
            case 'subtraction':
                result = number1 - number2;
                break;
            case 'multiplication':
                result = number1 * number2;
                break;
            case 'division':
                result = number1 / number2;
                break;
            default:
                result = 'Opération non reconnue';
        }

        alert(`${number1} ${getOperationSymbol(operation)} ${number2} = ${result}`);
        resultDiv.textContent = `Résultat : ${result}`;
    });

    function getOperationSymbol(operation) {
        switch (operation) {
            case 'addition':
                return '+';
            case 'subtraction':
                return '-';
            case 'multiplication':
                return 'x';
            case 'division':
                return '/';
            default:
                return '?';
        }
    }


    showLink.addEventListener('click', function (event) {
        event.preventDefault();
        calculatorForm.style.display = 'flex';
    });

    hideLink.addEventListener('click', function (event) {
        event.preventDefault();
        calculatorForm.style.display = 'none';
    });
    nombres.addEventListener('mouseenter', function(){
        info2.style.display= 'flex' ;
    });
    nombres.addEventListener('mouseleave', function(){
        info2.style.display= 'none' ;
    });

    operation.addEventListener('mouseenter', function(){
        info1.style.display= 'flex' ;
    });
    operation.addEventListener('mouseleave', function(){
        info1.style.display= 'none' ;
    });




