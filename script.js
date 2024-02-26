function toggleMode() {
  const html = document.documentElement

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  html.classList.toggle("light")

  /* pegar tag img, substituir a imagem, se tiver ligth adicionar se nao manter a imagem*/
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-mar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-mar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de Marcela com óculos de sol")
  } else {
    img.setAttribute("alt", "Foto de Marcela sorrindo")
  }
}
