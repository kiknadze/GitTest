// let arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach( (element, index, arr) => {
//     console.log(element, index, arr);
// } );

//--------------------------------------------------------------------

// let newArr = arr.map((element, index, arr) => {
//     return `<div><b> ${element * 2} </b></div>`;
// });

// console.log(arr);
// document.body.innerHTML = newArr.toString().split(',').join(' ');
// console.log(newArr)

//--------------------------------------------------------------------

// let filtered = arr.filter((element) => {
//     return element & 1;
// });

// console.log(filtered);


// for (let entry of arr.entries()){
//     console.log(entry)
// }

// for (let value of arr.values()) {
//     console.log(value)
// }

// for(let key of arr.keys()) {
//     console.log(key)
// }



//------------------------------------- დავალება 1 ------------------------------------------

// let style = ["jazz", "Blues"];
// console.log(style)

// style.push("Rock-n-Roll");
// console.log(style);



// style.splice(Math.floor(style.length/2), 1, 'Classics');
// console.log(style);

// style.shift();
// console.log(style);

// style.unshift("Reggae");
// console.log(style);

// style.unshift("Rap");
// console.log(style);

//------------------------------------- დავალება 1 ------------------------------------------


//------------------------------------- დავალება 2 ------------------------------------------

// let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

// let sumarr=0;

// for(let value of arr.values()) {
//     sumarr+=value;
// }
// console.log(sumarr);
// //------------------------------------- დავალება 2 ------------------------------------------


// function allSum(x, y, ...numbers) {
//     console.log(numbers);
//     // console.log(arguments)
// }

// allSum(1,2,3,4,5,6)

// let str = "Georgia";
// console.log([...str]);

// let elementNode = document.createElement('strong');
// let elementText = document.createTextNode('Georgia');

// let containerDiv = document.querySelector('#container');
// let p = containerDiv.querySelector('#para');

// p.appendChild(elementNode);
// elementNode.appendChild(elementText);

// console.log(document.body.innerHTML);

//insertBefore(elementNode, element)

//generateHTML(count, tagname, selector)
//generatorHTML(1, 'ul', '#container')
//generatorHTML(1, 'p', '#container', "text Content")

function GenerateHtml(count, tagName, ParentSelector, content, childCount, childElement) {


    this.createHtml = function() {
        this.count = count;
        this.childCount = childCount;
       
        for( let j=0; j<this.count; j++) {
            this.tagName = document.createElement(tagName);
            this.ParentSelector = document.querySelector(ParentSelector);
            this.ParentSelector.appendChild(this.tagName);
            if(!(this.childCount)) {
                this.content = document.createTextNode(content);
                this.tagName.appendChild(this.content);

            } else {
            for(let i=0; i<this.childCount; i++) {
                this.content = document.createTextNode(content);
                this.childElement = document.createElement(childElement);
                this.tagName.appendChild(this.childElement.appendChild(this.content));
            }
        }
        }
        
        
        
    }
}


let generateHtml = new GenerateHtml(2, 'div', '#container', 'menu');

generateHtml.createHtml();