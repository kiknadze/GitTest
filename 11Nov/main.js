let country = ["<div class='popular-traveling bankok'><h2>Bankok</h2></div>",
                "<div class='popular-traveling singapore'><h2>Singapore</h2></div>",
                "<div class='popular-traveling lasvegas'><h2>Las Vegas</h2></div>",
                "<div class='popular-traveling tbilisi'><h2>Tbilisi</h2></div>"];

class SlideShow {
    constructor(componentArray, speed, whereInserted, quantity, button) {
        this.componentArray = componentArray;
        this.speed = speed;
        this.whereInserted = whereInserted;
        this.quantity = quantity;
    }

    printSlide(){
        for(let i=0; i<this.quantity; i++) {
            document.getElementById(this.whereInserted).innerHTML += this.componentArray[i];
        }
    }

    left(){
        document.getElementById(this.whereInserted).innerHTML = '';
        let firstElement = this.componentArray.shift();
        this.componentArray.push(firstElement);
        this.printSlide();
    }
}

let firstSlide = new SlideShow(country, 900, 'popular-traveling-right', 3)
firstSlide.printSlide();

slideBTN.addEventListener('click', function() {
    firstSlide.left()
})