let myIterable = {
    [symbol.iterator]:() => ({
        items: 'Hello Iterator'.split(''),
        next: function next(){
            return {
                done: this.items.length===0,
                value: this.items.shift()
            }
        }
    })
}