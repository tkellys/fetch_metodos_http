// fetch('https://jsonplaceholder.typicode.com/posts')

// //then metodo q trata as promises (pega response que é um parametro da minha arrow function e pega as propriedades json desse parametro)

// // .then(response => response.json())
// // .then(json => console.log(json));

// // ----------------------------------------------------------------------------------------------------
// //mesmo codigo sem arrow function, a função nao precisa de nome é anonima, e em baixo precisa de return pq no => ja tem o retunr embutido

// .then(function(response){
//     return response.json()
// })
// .then(json => console.log(json));


// CRIANDO A API COM ARROW FUNCTION DESDE O INICIO
// const getPosts = (id) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.json())
//     .then(json => console.log(json)) 
    
// }
// getPosts(2);



