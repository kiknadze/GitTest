// const myEvent = document.createEvent('CustomEvent');
// pElement.addEventListener('myCustomEvent', function(event) {
//     console.log(event)
// })

// const myCustomDate = {
//     name: 'myCustomEvent',
//     id: 2018,
// }
// myEvent.initCustomEvent('myCustomEvent', true, false, myCustomDate);
// pElement.dispatchEvent(myEvent);



//---------------------------------------------------------------
// const table = document.querySelector('table');

// table.addEventListener('click', ({target}) => {
//     if( target.tagName.toLowerCase() === 'td') {
//         console.log(target.textContent)
//     }
// })



//-------------------------------jquery

$(document).ready( function(){
    //DOM Loaded
    // alert("A");
    // $(selectorExpression)
    // const divElements = $('div,p');
    // console.log(divElements)
    // const trElements = $('table tr');
    // console.log(trElements)

    const customersDiv = $('#customersDiv')
    // console.log(customersDiv)

    // const wowClass = $('.wow')
    // console.log(wowClass)
    
    const table = $('table[border]')
    console.log(table)

    const span = $('span:contains("Site")');
    console.log(span)
    
    const oddTr = $('tr:odd');
    console.log(oddTr)

    const evenTr = $('tr:odd');
    console.log(evenTr)

    evenTr.each( function(index, element){
        console.log($(this).html())
        this.title = `current index = ${index}`;
    })

    let attrVal = customersDiv.attr('class')
    customersDiv.addClass('newClass--Example')
    console.log(attrVal)
});


