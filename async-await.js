

const getPosts = async () => {
    let response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()

    console.log(data)
}
// getPosts();






