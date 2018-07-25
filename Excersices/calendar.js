function createCalendar(elem, year, month) {
    const weekday = 7;
    let currentDate = new Date(Date.UTC(year, month-1, 1));
    let dayget = currentDate.getDay();
    let dayCount = new Date(year, month, 0).getDate();
    elem.textContent = `Month: ${currentDate.getMonth()+1} Year: ${currentDate.getFullYear()}`;
    let tab = document.createElement('table');
    elem.appendChild(tab);
    let monthName = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

    for(let i=0; i<weekday; i++) {
    let mo = document.createElement('td');
    mo.classList.add('gr')
    tab.appendChild(mo).textContent = monthName[i];
    }

    let start=1;
    for(let j=0; j<6; j++) {
        if(start > dayCount) break;
        let tr = document.createElement('tr');
        tab.appendChild(tr)
        for(let k=0; k<weekday; k++){
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

createCalendar(calen, 2018, 7)