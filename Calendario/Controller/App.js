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

    const divLinha1 = document.createElement("div")
    const divLinha2 = document.createElement("div")
    const divLinha3 = document.createElement("div")
    divLinha1.setAttribute("class", "row")
    divLinha2.setAttribute("class", "row")
    divLinha3.setAttribute("class", "row")

    for (var mes = 0; mes < calendario.diasDoMes.length; mes++) {
        if (calendario.diasDoMes[mes].posicaoCalendario == 1) {
            divLinha1.appendChild(CriarElementoHTML(
                "div",
                { "class": "col bloco-dia" },
                calendario.diasDoMes[mes].dia
            ))
        }
        if (calendario.diasDoMes[mes].posicaoCalendario == 2) {
            divLinha2.appendChild(CriarElementoHTML(
                "div",
                { "class": "col bloco-dia" },
                calendario.diasDoMes[mes].dia
            ))
        }
        if (calendario.diasDoMes[mes].posicaoCalendario == 3) {
            divLinha3.appendChild(CriarElementoHTML(
                "div",
                { "class": "col bloco-dia" },
                calendario.diasDoMes[mes].dia
            ))
        }
    }

    articleCalendario.appendChild(divLinha1)
    articleCalendario.appendChild(divLinha2)
    articleCalendario.appendChild(divLinha3)

    // Teste data atual
    articleCalendario.appendChild(CriarElementoHTML(
        "p",
        { "class": "diaDeHoje" },
        calendario.hoje.dia + "/" + calendario.hoje.mes + "/" + calendario.hoje.ano
    ))

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