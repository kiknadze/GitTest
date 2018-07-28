generate.addEventListener('click', function() {
    let genNumber = Math.floor((Math.random() * 20) + 1);
    
    if(document.querySelector(`#number${genNumber}`).style.backgroundColor == 'rgb(255, 153, 153)') {
        document.querySelector(`#number${genNumber}`).style.backgroundColor = '#ff0000';
        document.querySelector(`#number${genNumber}`).classList.add('redone');
    } 
    else if(document.querySelector(`#number${genNumber}`).style.backgroundColor == 'rgb(255, 0, 0)' && document.querySelector(`#number${genNumber}`).classList == 'redone') {
        document.querySelector(`#number${genNumber}`).style.backgroundColor = '#660000';
    } 
    else if(document.querySelector(`#number${genNumber}`).style.backgroundColor == 'rgb(255, 0, 0)' && document.querySelector(`#number${genNumber}`).classList == 'redtwo') {
        document.querySelector(`#number${genNumber}`).style.backgroundColor = '#ff9999';
    }
    else if(document.querySelector(`#number${genNumber}`).style.backgroundColor == 'rgb(102, 0, 0)') {

        document.querySelector(`#number${genNumber}`).style.backgroundColor = '#ff0000';
        document.querySelector(`#number${genNumber}`).classList.add('redtwo');
    }
    else {
        document.querySelector(`#number${genNumber}`).style.backgroundColor = '#ff9999';
        document.querySelector(`#number${genNumber}`).classList.remove('redtwo');
    }
})
