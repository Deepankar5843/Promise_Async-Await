const posts = [
    { title: 'Post 1', body: 'this post 1' },
    { title: 'Post 2', body: 'This is post 2' }
];

function getPost() {
    setTimeout(() => {
        let outPut = '';
        posts.forEach((post, i) => {
            outPut += `<li>${post.title}</li>`
        })
        document.body.innerHTML = outPut;
    }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if (!error) {
                resolve();
            }
            else {
                reject('Error: Something went wrong');
            }

        }, 2000);
    });
}

createPost({ title: 'Post 3', body: 'This is post 3' })
    .then(getPost)
    .catch(err => console.log(err));

