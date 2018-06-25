//create constructor function
function Car() {
    this.name,
    this.color,
    this.brand,

    //print last result
    this.save = function() {
        document.write(`saving ${this.name}, color - ${this.color}, brand - ${this.brand}`)
        return this;
    },

    //set value to name
    this.setName = function(strname) {
        this.name = strname;
        return this;
    },

    //set value to color
    this.setColor = function(strcolor) {
        this.color = strcolor;
        return this;
    },

    //set value to brand
    this.setBrand = function(strbrand) {
        this.brand = strbrand;
        return this;
    };
}

//create object
let car = new Car()
    .setName('Jetta')
    .setColor('Platinum Gray Metallic')
    .setBrand('VW')
    .save();
console.log(car.brand)
