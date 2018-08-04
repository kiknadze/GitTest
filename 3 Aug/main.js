$(document).ready( function() {
    $('#loadBtn').click(function() {
        // $('#myDiv').load('template.html');
    //     $('#myDiv').load('template.html', function(response, status, xhr){
    //         // console.log(xhr)
    //         // console.log(response)
    //         // console.log(status)
    //     })

    // if(window.XMLHttpRequest) {
    //     request = new XMLHttpRequest();
    // } else if( window.ActiveXObject) {

    // }
    

    // request.addEventListener('progress', progressFunc);
    // request.addEventListener('load', completed);
    // request.addEventListener('error', errorFunc);
    // request.addEventListener('abort', cancelFunction);

    // request.onreadystatechange = function() {
    //     if( request.readyState == XMLHttpRequest.DONE){
    //         console.log(request.responseText)
    //     } else {
    //         console.log("Request - ", request.readyState)
    //     }
    // }

    // function errorFunc() {
    //     console.log("error Function")
    // }
    // function cancelFunction() {
    //     console.log("Cancel function")
    // }
    // function progressFunc() {
    //     console.log("Progress Function")
    // }
    // function completed() {
    //     console.log("Completed Function")
    // }

    // request.open('GET', 'template.html', true)
    // request.send(null)

    let url = 'https://jsonplaceholder.typicode.com/users';
    // $.get(url, function(data){
    //     console.log(data)
    //     $('#myDiv').append( data.map((el) => {
    //         return `<h1>${el.name}</h1>`
    //     }).join('')
    // );
    // })

    $.ajax({
        url: url,
        data: null,
        method: 'get',
        dataType: 'json',
        success(data, status, xhr) {
            // console.log(data);
            $('#myDiv').append( data.map((el) => {
                return `<h1>${el.name}</h1>`
                }).join('')
            );
        },
        error(xhr, status, error){
            console.log(error);
        }
    })

    });

    
})