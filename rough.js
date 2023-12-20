// const posts = [{ title: 'POST1' }];
// //Do not touch this function
// function create2ndPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'POST2' });
//             resolve()
//         }, 3000)
//     })
// }
// //Do not touch this function
// function create3rPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'POST3' });
//             resolve();
//         }, 2000)
//     })
// }

// //Do not touch this function
// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (posts.length > 0) {
//                 const poppedElement = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }

// //Modify the lines below and use .then and .catch smartly to get the correct output.
// // create2ndPost()




// create2ndPost()
//     .then(() => deletePost())
//     .then((item1) => {
//         console.log(item1.title);
//         return create3rPost();
//     })

//     .then(() => deletePost())
//     .then((item2) => {
//         console.log(item2.title);
//         return deletePost();
//     })

//     .then((item3) => {
//         console.log(item3.title);
//         return deletePost();
//     })

//     .catch((error) => {
//         if (error === 'ERROR: ARRAY IS EMPTY') console.log(error);
//     })












const blogs = [];

//Do not touch these functions below at all
function create1stBlog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogs.push({ title: 'BLOG1' });
            resolve();
        }, 3000)
    })
}

//Do not touch these functions below at all
function create2ndBlog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogs.push({ title: 'BLOG2' });
            resolve()
        }, 2000)
    })
}


function deleteBlog() {
    //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
    //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (blogs.length > 0) {
                const ele = blogs.pop();
                resolve(ele);
            }
            else {
                reject("ERROR")
            }

        }, 1000)
    })




}

//Call the function in the right way so that we can get the desired output

create1stBlog()

    .then(() => create2ndBlog)
    // .then((item1)=>{
    //     console.log(item1.title);
    //     return deleteBlog();
    // })

    .then(() => (deleteBlog))
    .then((item2) => {
        console.log(item2.title);
        return deleteBlog();
    })

    .then((item3) => {
        console.log(item3.title);
        return deleteBlog();
    })

    .then((item4) => {
        console.log(item4.title);
    })

    .catch((error) => {
        if (error === 'ERROR') console.log(error);
    })





