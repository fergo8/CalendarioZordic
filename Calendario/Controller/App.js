document.addEventListener("DOMContentLoaded", function(e) {
    var app = document.getElementById("app")

    const calendario = new Calendario()

    // Criar menu
    const articleMenu = document.createElement("article")
    articleMenu.appendChild(CriarElementoHTML(
        "h1", 
        { "id": "titulo" }, 
        "Olá mundo!"
    ))

    // Criar calendário
    const articleCalendario = document.createElement("article")
    articleCalendario.setAttribute("class", "row")

    articleCalendario.appendChild(CriarElementoHTML(
        "p",
        { "class": "diaDeHoje" },
        calendario.hoje.dia + "/" + calendario.hoje.mes + "/" + calendario.hoje.ano
    ))

    for (var mes = 0; mes < calendario.diasDoMes.length; mes++) {
        articleCalendario.appendChild(CriarElementoHTML(
            "div",
            { "class": "col" },
            calendario.diasDoMes[mes].dia
        ))
    }

    // Montar página
    app.appendChild(articleMenu)
    app.appendChild(articleCalendario)
})

function CriarElementoHTML(tag, prop, texto) {
    const elemento = document.createElement(tag)

    if (prop.id != null) {
        elemento.setAttribute("id", prop.id)
    }
    if (prop.class != null) {
        elemento.setAttribute("class", prop.class)
    }

    elemento.appendChild(document.createTextNode(texto))
    return elemento
}