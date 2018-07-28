let userEndPoint = `https://jsonplaceholder.typicode.com/users`

fetch(userEndPoint, {
    method: 'get'
})
.then( (response) => {
    // console.log(response)
    if( response.status === 200) {
        // console.log('Yep');
        return response.json();
    }
})
.then( usersList => {
    // console.log(usersList)
    document.body.innerHTML = usersList.map( user => {
        // onclick="showDetailsById(${user.id})"
        return `<div date-user-id="${user.id}">
        
            <h2>${user.name}<small> ID - ${user.id}</small><h2>
        </div>`
    }).join(' ');
    let users = document.querySelectorAll('[date-user-id]')
    users.forEach( user => {
        user.addEventListener('click', (event) => {

            let userDiv = event.target;
            if(userDiv.tagName.toLowerCase() != 'div'){
                while( userDiv.tagName.toLowerCase() != 'div') {
                    userDiv = userDiv.parentNode;
                }
            }
            console.log(userDiv.dataset)
            let userId = user.dataset.userId;
            showDetailsById(userId)
        }, false)
    })
})


.catch( (error) => {
    console.log(`Error - ${error.message}`);
})

function showDetailsById(userId) {
    fetch(`${userEndPoint}/${userId}`, {
        method: 'get'
    })
    .then( (response) => {
        // console.log(response)
        if( response.status === 200) {
            return response.json();
        }
    })
    .then( usersDetail => {
        document.body.innerHTML = `
        <div class='user_detail'>
            <h2>${usersDetail.name}</h2>
            <h3>Phone ${usersDetail.phone}</h3>
            <h3>Website ${usersDetail.website}</h3>
            <h3>email ${usersDetail.email}</h3>
        </div>`
        // console.log(usersList)
        // document.body.innerHTML =
    })
    .catch( (error) => {
        console.log(`Error - ${error.message}`);
    })
}

