function createCalendar(elem, year, month) {
    const weekday = 7;
    let currentDate = new Date(Date.UTC(year, month-1, 1));
    let dayget = currentDate.getDay(); //first day of month
    let dayCount = new Date(year, month, 0).getDate(); //month day count
    elem.textContent = `Month: ${currentDate.getMonth()+1} Year: ${currentDate.getFullYear()}`; //print date
    let tab = document.createElement('table'); //create table
    elem.appendChild(tab); //insert table to element
    let monthName = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']; //name array of weekdays

    //print names of weekdays
    for(let i=0; i<weekday; i++) {
    let mo = document.createElement('td');
    mo.classList.add('gr')
    tab.appendChild(mo).textContent = monthName[i];
    }

    let start=1; //day insert variable

    for(let j=0; j<6; j++) {
        if(start > dayCount) break; //in several month we have 6 row, but if we don't need 6rd row not print it
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