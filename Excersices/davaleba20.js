
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aClean(mas) {
    let mas2 = arr.slice(0,mas.length);
    for(let k=0; k<mas.length; k++) {
        for(let t=0; t<mas2.length; t++) {
            if(mas[k].length == mas2[t].length && mas[k] != mas2[t]) {
                let compareNum = 0;
                for( let i=0; i<mas[k].length; i++) {
                        if( mas[k].toLowerCase().includes(mas2[t].toLowerCase().charAt(i))) {compareNum++;}  
                    }
                    if(compareNum==mas[k].length) {
                        mas2.splice(mas2.indexOf(mas[k]),1)
                        document.writeln(mas[k])
                        break;
                        
                        
                    }
                }
                
        }
        mas2.shift();       
    }
}

//უკეთესი გადაწყვეტილება-----------------------
// function aClean(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       obj[sorted] = arr[i];
//     }
//     return Array.from(Object.values(obj));
//   }

aClean(arr);