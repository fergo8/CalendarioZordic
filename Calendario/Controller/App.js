document.addEventListener("DOMContentLoaded", function(e) {
    var app = document.getElementById("app")

    const calendario = new Calendario()

    // Criar menu
    const articleMenu = document.createElement("article")
    articleMenu.appendChild(CriarElementoHTML("h1", "Olá mundo!"))

    // Criar calendário
    const articleCalendario = document.createElement("article")
    articleCalendario.appendChild(CriarElementoHTML("p", calendario.hoje.dia + "/" + calendario.hoje.mes + "/" + calendario.hoje.ano))

    for (var mes = 0; mes < calendario.diasDoMes.length; mes++) {
        articleCalendario.appendChild(CriarElementoHTML("div", calendario.diasDoMes[mes].dia))
    }

    // Montar página
    app.appendChild(articleMenu)
    app.appendChild(articleCalendario)
})

function CriarElementoHTML(tag, texto) {
    const elemento = document.createElement(tag)
    elemento.appendChild(document.createTextNode(texto))
    return elemento
}