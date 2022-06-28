document.addEventListener("DOMContentLoaded", function(e) {
    var app = document.getElementById("app")

    const calendario = new Calendario()

    // Criar menu
    const articleMenu = document.createElement("article")
    const titulo = document.createElement("h1")
    titulo.appendChild(document.createTextNode("Olá mundo!"))
    articleMenu.appendChild(titulo)

    // Criar calendário
    const articleCalendario = document.createElement("article")
    const paragrafo = document.createElement("p")
    paragrafo.appendChild(document.createTextNode(calendario.hoje.dia + "/" + calendario.hoje.mes + "/" + calendario.hoje.ano))
    articleCalendario.appendChild(paragrafo)

    calendario.diasDoMes

    for (var mes = 0; mes < calendario.diasDoMes.length; mes++) {
        const div = document.createElement("div")
        div.appendChild(document.createTextNode(calendario.diasDoMes[mes].dia))
        articleCalendario.appendChild(div)
    }

    // Montar página
    app.appendChild(articleMenu)
    app.appendChild(articleCalendario)
})