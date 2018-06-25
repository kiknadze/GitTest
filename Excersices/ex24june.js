'use strict';

function Calculator() {
    
    let operaciebi = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(str) {
        this.operacia = str.split(" "),
        this.num1 = Number(this.operacia[0]);
        this.num2 = Number(this.operacia[2]);
        this.oper = this.operacia[1];
        
        return operaciebi[this.oper](this.num1, this.num2)
        }

        this.addMethod = function(name, func) {
            operaciebi[name] = func;
          };
    }



let calc = new Calculator();
alert(calc.calculate("7 - 3"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);

let result1 = powerCalc.calculate("8 / 4");
alert(result1);

let result2 = powerCalc.calculate("2 * 3");
alert(result2);