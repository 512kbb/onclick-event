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
  return Number(string.split(' ')[0])
}

//primer approach, no escalable

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

// segundo acercamiento, escalable a muchos botones
// profe si tiene dudas con mi conocimiento me lo puede preguntar pero en todo
// caso manejo algo de javascript, he programado mas usando react, no tanto js
// nativo, pero me defiendo
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
    window.alert('Ninja was liked, check my code :)')
  })
})



add.addEventListener('click', (e) => {
  add.style = 'display: none;'
})

