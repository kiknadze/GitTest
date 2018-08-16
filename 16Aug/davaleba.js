// let str = `Demo Str 145
// kfiwif.
// ksbeksbe
// hello text`;

// let sentence = str.split('.').lenght - 1;

// let words = str.split(' ');
// let numbers = str.replace(/[^0-9]/g, '').length;
// let lines = str.match(/\n/g).lenght;
// let letters = str.match(/[A-z]/g).length;

// console.log(words + numbers + lines + letters)


function Observer() { 
    this.sourceInput = document.querySelector('#subject');
    this.sourceData = [];
    this.listeners  = [];
   }
  
   Observer.prototype.init = function() {
    this.listeners = document.querySelectorAll('.listener');
    this.sourceData.length = this.listeners.length;
   }

  Observer.prototype.update = function(index, func) {
    for (let i = 0; i < this.sourceData.length; i++) {
      if(this.sourceData[i] != 'undefined') {
        this.listeners[i].innerHTML = this.sourceData[i] || '';
      }
    }
    if(func) {
      let currentElement = this.listeners[index];
      func(currentElement);
    }
  
  }
   Observer.prototype.add = function (index, func) {
     this.sourceData[index] = this.sourceInput.value;
     this.update(index, func);
    }
  
    const observer = new Observer();
    observer.init();

    add.addEventListener('click', function(){
        let div = document.createElement('div');
        div.setAttribute('class', 'listener');
        document.body.appendChild(div)
        observer.init();
    })
  
    observer.sourceInput.addEventListener('keyup', ()=>{
        for(let i=0; i<observer.listeners.length; i++) {
            observer.add(i)
        } 
})