let country = ["<div class='popular-traveling bankok'><h2>Bankok</h2></div>",
                "<div class='popular-traveling singapore'><h2>Singapore</h2></div>",
                "<div class='popular-traveling lasvegas'><h2>Las Vegas</h2></div>",
                "<div class='popular-traveling tbilisi'><h2>Tbilisi</h2></div>"
            ];

let travellers = [
    "<div class='popular-traveller'><div class='traveller-picture'></div><div class='traveller-name'>Jhon DOe</div><div class='traveller-place'>Live in Russia</div><div class='traveller-info'><i class='fas fa-long-arrow-alt-right'></i></div></div>",
    "<div class='popular-traveller'><div class='traveller-picture'></div><div class='traveller-name'>Niki Fun</div><div class='traveller-place'>Live in America</div><div class='traveller-info'><i class='fas fa-long-arrow-alt-right'></i></div></div>",
    "<div class='popular-traveller'><div class='traveller-picture'></div><div class='traveller-name'>Temo DOe</div><div class='traveller-place'>Live in Georgia</div><div class='traveller-info'><i class='fas fa-long-arrow-alt-right'></i></div></div>",
    "<div class='popular-traveller'><div class='traveller-picture'></div><div class='traveller-name'>Emi Zak</div><div class='traveller-place'>Live in Norway</div><div class='traveller-info'><i class='fas fa-long-arrow-alt-right'></i></div></div>"   
];

let guides = [
    "<div class='guidePropile'><div class='guide-picture'></div><div class='guide-name'>Jhon DOe</div><div class='guide-prof'>Cheif Technical Guide</div><div class='guide-social'><i class='fab fa-facebook-messenger'></i><i class='fab fa-twitter'></i><i class='fab fa-linkedin-in'></i></div></div>",
    "<div class='guidePropile'><div class='guide-picture'></div><div class='guide-name'>Niko DOe</div><div class='guide-prof'>Cheif Technical Guide</div><div class='guide-social'><i class='fab fa-facebook-messenger'></i><i class='fab fa-twitter'></i><i class='fab fa-linkedin-in'></i></div></div>",
    "<div class='guidePropile'><div class='guide-picture'></div><div class='guide-name'>Temo DOe</div><div class='guide-prof'>Cheif Technical Guide</div><div class='guide-social'><i class='fab fa-facebook-messenger'></i><i class='fab fa-twitter'></i><i class='fab fa-linkedin-in'></i></div></div>",
    "<div class='guidePropile'><div class='guide-picture'></div><div class='guide-name'>Gia DOe</div><div class='guide-prof'>Cheif Technical Guide</div><div class='guide-social'><i class='fab fa-facebook-messenger'></i><i class='fab fa-twitter'></i><i class='fab fa-linkedin-in'></i></div></div>",   
    "<div class='guidePropile'><div class='guide-picture'></div><div class='guide-name'>Vano DOe</div><div class='guide-prof'>Cheif Technical Guide</div><div class='guide-social'><i class='fab fa-facebook-messenger'></i><i class='fab fa-twitter'></i><i class='fab fa-linkedin-in'></i></div></div>"   
];

class SlideShow {
    constructor(componentArray, speed, whereInserted, quantity) {
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

let travellerSlide = new SlideShow(travellers, 1, 'popular-traveller-right', 3);
travellerSlide.printSlide();
document.getElementById('popular-traveller-slideBTN').addEventListener('click', function() {
    travellerSlide.left()
})

let guidesSlide = new SlideShow(guides, 1, 'guidesSlide', 4);
guidesSlide.printSlide();
document.getElementById('guidesBTN').addEventListener('click', function() {
    guidesSlide.left()
})