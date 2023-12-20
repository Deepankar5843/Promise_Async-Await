// Mock functions for createPost, updateLastUserActivityTime, and deletePost
const createPost = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = [{ id: 1, content: 'New post' },
            { id: 2, content: 'New2 post' }, { id: 3, content: 'New3 post' }
            ];
            resolve(post);
        }, 1000);
    });
};

const updateLastUserActivityTime = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
};

const deletePost = (postId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Post with ID ${postId} deleted`);
            resolve();
        }, 1000);
    });
};

// Example usage
const user = { id: 123, name: 'John' };

const createAndDeletePost = async () => {
    try {
        const [post, lastActivityTime] = await Promise.all([createPost(), updateLastUserActivityTime()]);
        console.log('All promises resolved!');

        console.log('Posts:', [post]);
        console.log('Last Activity Time:', lastActivityTime);

        // Simulating deletePost with the post ID
        await deletePost(post.id);

        console.log('Post deleted successfully!');
    } catch (error) {
        console.error('Error:', error);
    }
};

createAndDeletePost();
