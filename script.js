

function toggleMode () {
  const html = document.documentElement

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else {
  //   html.classList.add('light')
  // }

  //  ou 
  
  html.classList.toggle('light')

//  pegar a tag img 
const img = document.querySelector("#profile img")
// se tiver light mode, adicionar a imagem light
  if(html.classList.contains("light")){
      img.setAttribute("src", "./assets/avatar2.png")
  }else {
      img.setAttribute("src", "./assets/avatar.png")
  }
//  se tiver sem a light mode, manter a imagem normal
//  substituir a imagem
}