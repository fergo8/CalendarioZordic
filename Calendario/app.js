document.addEventListener("DOMContentLoaded", function(e) {
    alert("hello world!")
    var app = document.getElementById("app");

    const titulo = document.createElement("h1")
    titulo.appendChild(document.createTextNode("Olá mundo!"))

    app.appendChild(titulo)
})