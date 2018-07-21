
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aClean(mas) {

    for(let k=0; k<mas.length; k++) {
        for(let t=1; t<mas.length; t++) {
            if(mas[k].length == mas[t].length) {
                compareNum = 0;
                for( i=0; i<mas[k].length; i++) {
                    for( j=0; j<mas[t].length; j++) {
                        if( mas[k].toLowerCase().charAt(j) == mas[t].toLowerCase().charAt(i)) compareNum++;
                    }
                    if(compareNum==mas[k].length) {
                        console.log(mas[k])
                    }
                }
            }
        }
        mas.shift();
    }
}


aClean(arr);