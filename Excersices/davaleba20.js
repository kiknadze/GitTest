
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aClean(mas) {

    for(let k=0; k<mas.length; k++) {
        for(let t=1; t<mas.length; t++) {
            if(mas[k].length == mas[t].length) {
                let compareNum = 0;
                for( let i=0; i<mas[k].length; i++) {
                    
                        if( mas[k].toLowerCase().includes(mas[t].toLowerCase().charAt(i))) {compareNum++;} 
                        
                    }
                    if(compareNum==mas[k].length) {
                        document.writeln(mas[k])
                    }
                }
                
        }

        mas.shift()
        console.log(mas)
    }
    
}


aClean(arr);