// function makeAPromise(time) {
//     return new Promise(function(resolve, reject) {
//         console.log('Start/Created Promise');
//         setTimeout( () => {
            
//             if( time > 3000 ) {
//                 // console.log('Rejecting')
//                 reject(new Error('Too Long Time'))
//             } else {
//                 // console.log('Resolving');
//                 resolve(`OK its ${time}`);
//             }
//         }, time)
//     });
// }

// let sec1 = makeAPromise(1000)
// // sec1.then( ( result) => {
// //     console.log(result)
// // })
// // .catch( ( error) => {
// //     console.log(error.message)
// // })

// let sec2 = makeAPromise(2000)
// //sec2.then( ( result) => {
// //     console.log(result)
// // })
// // .catch( ( error) => {
// //     console.log(error.message)
// // })

// let sec3 = makeAPromise(3000)
// // sec3.then( ( result) => {
// //     console.log(result)
// // })
// // .catch( ( error) => {
// //     console.log(error.message)
// // })

// let sec4 = makeAPromise(4000)
// // sec4.then( ( result) => {
// //     console.log(result)
// // })
// // .catch( ( error) => {
// //     console.log(error.message)
// // })

// // let allPromise = Promise.all([sec1, sec2, sec3]);
// // allPromise
// // .then( (result) => {
// //     console.log(result)
// // })
// // .catch( error => {
// //     console.log(error)
// // })

// // let allRace = Promise.race( [sec1, sec2, sec3, sec4] );

// // allRace
// // .then( (result) => {
// //     console.log(result)
// // })
// // .catch( error => {
// //     console.log(error)
// // }) 

// // let resolvePromise = Promise.resolve('Resolved Promise Example')

// // resolvePromise
// // .then( result => {
// //     console.log(result)
// // })
// // .catch( error => {
// //     console.log(error)
// // })

//-----------------------------------------------დავალება 1
save.addEventListener('click', makeAPromise)


function makeAPromise() {
    let div = document.createElement('div');
    div.textContent = 'Loadging...';
    document.body.appendChild(div);
    let sec1 = new Promise(function(resolve, reject) {
        setTimeout( () => {
            document.body.removeChild(div)
            resolve()
        }, 2000)
    })
    sec1.then( () => {
        birthres.textContent = day.value;
        birthmo.textContent = month.value;
        birthyear.textContent = year.value;
        live.textContent = city.value;
        aboutme.textContent = about.value;
        imga.style.display = 'block';
        answer.style.display = 'block';
    })
    .catch( ( error) => {
        console.log(error.message)
    })
    }
    

    //Anonymous async function
    let func = (async function() {
        //code
    })()

    //async funct declaration

    async function myAsync() {
        //code
    }

    //Async function Assignement
    let myAsyncFunc = async function() {
        //code
    }

    let myAsyncFunc = async () => {
        //code
    }

    addEventListener('click', async function(event) {})

    //object & Class methods
    let myObject = {
        async method() {
            //code
        }
    }

    class MyClass {
        async method(){
            //code
        }
    }