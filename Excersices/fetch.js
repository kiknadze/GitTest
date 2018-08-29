if (localStorage.getItem("User0")) {
    console.log('მომხმარებლები უკვე არსებობს')
    printUsers()
} else {
        $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        data: null,
        method: 'get',
        dataType: 'json',
        success(data, status, xhr) {
            let i=0;
            while(data) {
                if(data[i] == undefined) break;
                localStorage.setItem(`User${i}`, `Name: ${data[i].name}, E-mail: ${data[i].email}`);
                i++;
            }
            printUsers()
        },
        error(xhr, status, error){
            console.log(error);
        }
    })
}

function printUsers(){
    $(myDiv).empty();
    for (var i = 0; i < localStorage.length; i++){
        $(myDiv).append(`<div>${localStorage.getItem(`User${i}`)}</div>`);
    }
}


$(myDiv).on('click', function(e){
    let newValue = prompt('დაარედაქტირე ან წაშალე', localStorage.getItem(`User${($('div').index(e.target))-1}`));
    if(newValue == '') localStorage.removeItem(`User${($('div').index(e.target))-1}`)
    if(newValue != null) {
        localStorage.setItem(`User${($('div').index(e.target))-1}`, newValue);
        printUsers();
    }
})