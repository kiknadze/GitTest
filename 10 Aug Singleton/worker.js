function add(a, b) {
    if(!parseFloat(a) || !parseFloat(b)){
        throw 'numeric inputs allowed';
    }
    return a + b;
}

function sub(a, b){
    this.postMessage(a - b);
}

self.addEventListener('message', function(e){
    switch(e.data.type){
        case 'add':
            add.apply(this, e.data.nums)
        break;
        case 'sub':
            sub.apply(this, e.data.nums);
        break;
    }
})