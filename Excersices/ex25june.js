//create constructor function
function Car() {
    this.name,
    this.color,
    this.brand,

    //print last result
    this.save = function() {
        document.write(`saving ${name}, color - ${color}, brand - ${brand}`)
    }

    //set value to name
    this.setName = function(strname) {
        name = strname;
    }

    //set value to color
    this.setColor = function(strcolor) {
        color = strcolor;
    }

    //set value to brand
    this.setBrand = function(strbrand) {
        brand = strbrand;
    }
}

//create object
let car = new Car();

car.setName('Jetta')
car.setColor('Platinum Gray Metallic')
car.setBrand('VW')
car.save();