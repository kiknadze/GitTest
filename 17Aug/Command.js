font.addEventListener('input', function(){
    text.style.fontSize = font.value;
})
color.addEventListener('click', function(){
    text.style.color = 'red';
})
border.addEventListener('input', function(){
    text.style.border = border.value;
})

class SpecialMath {


    font(){

        text.style.fontSize = font.value;

    }



    color(){

        text.style.color = 'red';

    }



    border(){

        text.style.border = border.value;

    }

}



let sq = new SpecialMath();


class Command {

    constructor(obj){

        this._subject = obj;

        this.commandsExecuted = [];

    }



    execute(command){

        this.commandsExecuted.push(command);

        return this._subject[command]();

    }

}



const myNum = new Command( new SpecialMath() );

font.addEventListener('input', myNum.execute('font'))
font.addEventListener('click', myNum.execute('color'))
font.addEventListener('input', myNum.execute('border'))



console.log(myNum.commandsExecuted);