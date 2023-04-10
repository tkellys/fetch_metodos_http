
const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method : 'DELETE',
    });
console.log('deletado');
};

deletePost(); 