const studNumb = 15;

function addDay() {
    let parent = document.querySelector('.table-body');
    let grade = document.createElement('div');
    grade.setAttribute('class', 'grade');
    parent.appendChild(grade);

    for(let i=0; i<=studNumb; i++) {
        let myDiv = document.createElement('div');
        myDiv.setAttribute('class', `box ${i}`);
        if(i==0) {
            myDiv.setAttribute('class', 'boxTitle');
            myDiv.appendChild(document.createTextNode('date'));
        } else {
            myDiv.appendChild(document.createTextNode('0'));
        }
        grade.appendChild(myDiv);
    }
}

function removeDay() {
    let box = document.querySelector('.grade:last-child');
    box.parentNode.removeChild(box);
}