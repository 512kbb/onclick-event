const login = document.getElementById('login')
// const like1 = document.getElementById('like1')
// const like2 = document.getElementById('like2')
const likeButtons = document.querySelectorAll('.like')
const add = document.getElementById('add')

login.addEventListener("click", (e) => {
  e.preventDefault()
  if (login.innerText === 'Login') {
    login.innerText = 'Log Out'
  } else {
    login.innerText = 'Login'
  }
})

function getLikeNumber(string) {
  /* 
    se extrae el numero de likes
    directamente desde el texto del boton
    '13 likes' se le aplica split
    lo que devuelve ['13', 'likes']
    en su posicion [0] esta '13'
    y se castea como number al ser retornado
  */
  return Number(string.split(' ')[0])
}

//primer approach, no escalable aunq es mas simple de enteder 

// let liked1 = false
// like1.addEventListener("click", (e) => {
//   let currentLikes = getLikeNumber(like1.innerText)
//   if (!liked1) {
//     console.log(currentLikes)
//     let newLikes = currentLikes + 1
//     like1.innerText = `${newLikes} Likes`
//     like1.style = 'background-color: white'
//     liked1 = true
//   } else {
//     let newLikes = currentLikes - 1
//     like1.innerText = `${newLikes} Likes`
//     like1.style = 'background-color: #ffd966'
//     liked1 = false
//   }
// })

// let liked2 = false
// like2.addEventListener("click", (e) => {
//   let currentLikes = getLikeNumber(like2.innerText)
//   if (!liked2) {
//     console.log(currentLikes)
//     let newLikes = currentLikes + 1
//     like2.innerText = `${newLikes} Likes`
//     like2.style = 'background-color: white'
//     liked2 = true
//   } else {
//     let newLikes = currentLikes - 1
//     like2.innerText = `${newLikes} Likes`
//     like2.style = 'background-color: #ffd966'
//     liked2 = false
//   }
// })

/* 
    segundo acercamiento, escalable a muchos botones
    profe si tiene dudas con mi conocimiento me lo puede preguntar pero en todo
    caso manejo algo de javascript, he programado mas usando react, no tanto js
    nativo, pero me defiendo
    el selector QuerySelectorAll devuelve un array con los elementos
    que coincidan, redundantemente, con la query, en este caso '.like'
    al ser un array, se tiene acceso al metodo forEach que nos permite
    iterar cada boton del arreglo
    la funcion forEach, puede recibir como parametro una funcion
    en este caso use una arrowFunction (e) => {}

    se levanta que el estado inicial es false para el like
    que funciona como flag para la validacion siguiente

    si la condicion es falsa, se aumenta en uno el numero de likes
    y se cambia el innerText del boton con el nuevo numero
    aparte le cambie el estilo para que fuera un poco mas notorio el cambio
    tambien se cambia la flag a true, por si lo vuelve a presionar
    y si la flag esta en verdadera y se vuelve apresionar, hace el mismo efecto
    pero inverso
*/
likeButtons.forEach(button => {
  let liked = false
  button.addEventListener("click", (e) => {
    // const currentLikes = getLikeNumber(button.innerText)
    // if (!liked) {

    //   const newLikes = currentLikes + 1
    //   // console.log(currentLikes)
    //   button.innerText = `${newLikes} Likes`
    //   button.style = 'background-color: white'
    //   liked = true
    // } else {

    //   const newLikes = currentLikes - 1
    //   // console.log(currentLikes)
    //   button.innerText = `${newLikes} Likes`
    //   button.style = 'background-color: #ffd966'
    //   liked = false
    // }

    // aqui esta lo que se pidio
    window.alert('Ninja was liked')
  })
})



add.addEventListener('click', (e) => {
  add.style = 'display: none;'
})

