// let divElement = document.createElement('div');
// console.log(divElement);
// document.body.appendChild(divElement);

// divElement.textContent = 'Dynamic text..';
// divElement.classList.add('box');

// let liElement = document.createElement('li');
// liElement.innerText = 'li Element';
// liElement.style.fontSize = '20px';
// // liElement.append(' Append String');
// let strongElement = document.createElement('strong');
// strongElement.textContent = ' I am a strong element';
// // liElement.append(strongElement)
// // mylist.insertBefore(liElement, mylist.children[2]);
// // mylist.children[2].before(liElement)

// mylist.children[1].replaceWith(liElement);
// let clondLiElement = liElement.cloneNode(true)

// // mylist.children[mylist.children.length - 1].remove()

// let removeElement = mylist.children[mylist.children.length - 1];
// mylist.removeChild(removeElement);

//-------------------------davaleba2
// function clear(elem) {
//     while (elem.firstChild) {
//         elem.firstChild.remove();
//     }
// }

// clear(list)

//------------------davaleba2
// let fir = document.createElement('li');
// fir.innerText = '2';
// list.insertBefore(fir, list.lastElementChild);

// let sec = document.createElement('li');
// sec.innerText = '3';
// list.insertBefore(sec, list.lastElementChild);

function createCalendar(elem, year, month) {
    let currentDate = new Date(Date.UTC(year, month-1, 1));
    console.log(currentDate)
    let dayget = currentDate.getDay();
    console.log(dayget)
    let dayCount = new Date(year, month, 0).getDate();
    console.log(dayCount)

    let tab = document.createElement('table');
    elem.appendChild(tab);
    let monthName = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

    for(let i=0; i<7; i++) {
    let mo = document.createElement('td');
    mo.classList.add('gr')
    tab.appendChild(mo).textContent = monthName[i];
    }

    let start=1;
    for(let j=0; j<5; j++) {
        let tr = document.createElement('tr');
        tab.appendChild(tr)
        for(let k=0; k<7; k++){
                let td = document.createElement('td');
                if(start == 1 && k != dayget || start > dayCount) {
                    tr.appendChild(td)
                }
                else if(j == 0 && k == dayget) {
                    tr.appendChild(td).textContent = start;
                    start++;
                }
                else {
                    tr.appendChild(td).textContent = start;
                    start++;
                }   
        }
    }

}

createCalendar(calen, 2018, 8)