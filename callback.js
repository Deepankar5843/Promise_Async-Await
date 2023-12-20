// const posts = [
//     { title: 'Post 1', body: 'This is post 1' },
//     { title: 'Post 2', body: 'This is Post 2' }
// ];

// function getPost() {
//     setTimeout(() => {
//         let outPut = '';
//         posts.forEach((post, i) => {
//             outPut += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = outPut;
//     }, 1000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({ title: 'Post 3', body: 'This is post 3' }, getPost);