// const obj =[
//     {title:'Post 1', body:'This is post 1'},
//     {title:'Post 2', body:'This is post 2'},
//     {title:'Post 2', body:'This is post 2'}
// ]

// function updateLastUserActivityTime() {
//     return new Promise((resolve, reject) => {
//         const currentTime = new Date().toLocaleTimeString();
//         console.log(currentTime);
//         resolve(currentTime)
//     })
// }

// function createNewUser(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          obj.push(post);
//          resolve()
//         })
//     })

// }









// console.log('person1: Shows ticket');
// console.log('person2: show Ticket');

// const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000)
// });



// const getPopCorn = promiseWifeBringingTicket.then((item) => {
//     console.log('Let go for a movie');
//     console.log('No first I want some starter in my stomach');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(` ${item} Chocolaty Popcorn`)
//         }, 2000)
//     })
// })

// const drinkSomeJuice = getPopCorn.then((item2) => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(` ${item2} juice`)
//         }, 4000)
//     })
// })


// drinkSomeJuice.then((item3) => {
//     console.log(item3);
// })


// NOW SAME FUNCTION BUT NOW USING ASYNC AWAIT


console.log('Hey wife bring the tickets');
console.log('Yaa hasuu i am on my way');

const preMovie = async () => {

    const wifeBringTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 2000)
    });

    const getPopCorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const addButter = new Promise((resolve, reject) => resolve(`butter`));


    let ticket = await wifeBringTicket;

    console.log(`Wife: Here is your ${ticket}`);
    console.log('No first I want some starter in my stomach');

    let popcorn = await getPopCorn;

    console.log(`Husband: Here is your ${popcorn}`);
    console.log('WIFE: No first I want some buuter in my popcorn');

    let butter = await addButter;

    console.log(`Husband: Here is the ${butter}`);
    console.log('Husband: anything else');

    console.log('Nooooooooo');


    return ticket;

}

preMovie().then((m) => console.log(m));



