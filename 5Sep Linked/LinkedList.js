function LinkedList(){
    let head = null;
    let length = 0;
    let Node = function(value){
        this.value = value;
        this.next = null;
    }
 
    this.length = () => length;
    this.head = () => head;
 
    this.add = (value) =>{
        let node = new Node(value)
        if( head  === null) {
            head = node;
        }
        else{
         let current = head
         while(current.next){
             current = current.next;
         }
         current.next = node;
        }
        length++
    }
    this.remove = (value) =>{
         let current = head;
         let prevNode;
         if(current.value === value){
             head  = current.next
         }
         else {
             while(current.value !== value){
                 prevNode = current;
                 current = current.next
             }
             prevNode.next = current.next;
         }
         length--;
    }
    this.isEmpty = () =>{
        return length === 0;
    }
    this.indexOf = (value) => {
        let current = head;
        let index = -1;
        while(current){
            index++;
            if( current.value === value){
                return index;
            }
            curent = current.next
        }
        return -1
    }
    this.valueAt = (index) => {
        let current = head;
        let number = 0;
        while(current) {
            if(number === index) {
                return current.value
            }
            current = current.next
            number++
        }
        return -1
    }

    this.insertAt = (index) => {
        let number = this.valueAt(index-1)
        let curr = this.valueAt(index)
        let node = new Node(value)
        node.value = value;
        number.next = node;
        node.next = curr;

    }
 }
 
 let list = new LinkedList();
 list.add(1)
 list.add(13)
 list.add(16)
 list.add(29)
 console.log(list.length())
 console.log(list.head().value)
 console.log(list.valueAt(2))