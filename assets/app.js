const currentYear = document.querySelector(".newYear")

function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("dark")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("dark")) {
    img.setAttribute("src", "https://github.com/hugolinobg.png")

    img.setAttribute(
      "alt",
      "Foto de Hugolino B. Guimarães usando camisa azul marinho e fundo roxo."
    )
  } else {
    img.setAttribute("src", "./assets/image/avatar-light.jpg")
    img.setAttribute(
      "alt",
      "Foto de Hugolino B. Guimarães usando camisa branca"
    )
  }
}

function currentFullYear() {
  const newYear = new Date().getFullYear()
  currentYear.textContent = newYear
}
currentFullYear()
