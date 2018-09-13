class HashTable {
    constructor(){
        this.table = new Array(255);
    }

    add(value) {
        this.table[this.hash(value, 255)] = value;
    }

    check(value) {
        return !!this.table[this.hash(value, 255)];
    }

    hash(value, max){
        let num = 0;
        for( let i=0; i < value.length; i++) {
            num += value.charCodeAt(i) * i;
        }

        return num % max;
    }

    remove(key) {
        this.deletekey = this.hash(key, 255)
        if(this.check(key)){
            this.table.splice(this.deletekey, 1)
        }
    }

    log(key) {
        console.log(this.table[key])
    }
}

let hTable = new HashTable();
console.log(hTable.add('HastTables', 255))
console.log(hTable.check('HastTables'))
hTable.log(93)
hTable.remove('HastTables')
console.log(hTable.check('HastTables'))
hTable.log(93)

