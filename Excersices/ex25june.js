//create constructor function
function Car() {
    this.name,
    this.color,
    this.brand,

    //print last result
    this.save = function() {
        document.write(`saving ${this.name}, color - ${this.color}, brand - ${this.brand}`)
    },

    //set value to name
    this.setName = function(strname) {
        this.name = strname;
    },

    //set value to color
    this.setColor = function(strcolor) {
        this.color = strcolor;
    },

    //set value to brand
    this.setBrand = function(strbrand) {
        this.brand = strbrand;
    };
}

//create object
let car = new Car();

car.setName('Jetta')
car.setColor('Platinum Gray Metallic')
car.setBrand('VW')
car.save();
console.log(car.brand)
