// $(document).ready( function() {

//     $('#save').click(function(){
//         localStorage.setItem('Name', $('#name').val())
//         localStorage.setItem('Surname', $('#surname').val())
//         localStorage.setItem('Age', $('#age').val())
        
//     });

//     $('#show').click(function(){
//         $('#right').append(localStorage.getItem('Name'))
//         $('#right').append(localStorage.getItem('Surname'))
//         $('#right').append(localStorage.getItem('Age'))
//     });

// });

let numbers = [];
for(let i=1; i<=150; i++) {
    numbers.push(i)
}

function print() {
    numbers.forEach(function(element) {
        let div = document.createElement('div');
        div.setAttribute('class', 'number');
        div.textContent = element;
        container.appendChild(div)
    })
}

print()


ascending.addEventListener('click', function(){
    numbers.sort((a,b) => a > b)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    print();
})

descending.addEventListener('click', function(){
    numbers.sort((a,b) => a < b)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    print();
})


shuffle.addEventListener('click', function shuffle() {
    var currentIndex = numbers.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = numbers[currentIndex];
      numbers[currentIndex] = numbers[randomIndex];
      numbers[randomIndex] = temporaryValue;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    print();
  
  });

  container.addEventListener('click', function(event) {
    if(event.target != 'container') {
        let index = numbers.indexOf(Number(event.target.textContent))
        numbers.splice(index, 1)
        event.target.remove();
    }
  })