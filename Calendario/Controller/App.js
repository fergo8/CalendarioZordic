document.addEventListener("DOMContentLoaded", function(e) {
    var app = document.getElementById("app")
    const calendario = new Calendario()

    app.appendChild(GerarMenuSuperior(calendario))
    app.appendChild(GerarCalentario(calendario))
})

function GerarMenuSuperior(calendario) {
    const articleMenu = document.createElement("article")
    articleMenu.setAttribute("class", "article-menu")

    articleMenu.appendChild(CriarElementoHTML(
        "img", 
        {
            "id": "logo",
            "src": "../Images/Logo.png"
        },
        ""
    ))

    articleMenu.appendChild(CriarElementoHTML(
        "h1", 
        { "id": "titulo" }, 
        "Calendário"
    ))

    articleMenu.appendChild(CriarElementoHTML(
        "span", 
        { "class": "mes-ano-selecionado" }, 
        "Mês " + calendario.hoje.mes + " de " + calendario.hoje.ano
    ))

    return articleMenu
}

function GerarCalentario(calendario) {
    const articleCalendario = document.createElement("article")
    articleCalendario.setAttribute("class", "article-border article-calendario")

    const divLinha1 = document.createElement("div")
    const divLinha2 = document.createElement("div")
    const divLinha3 = document.createElement("div")
    divLinha1.setAttribute("class", "row")
    divLinha2.setAttribute("class", "row")
    divLinha3.setAttribute("class", "row")

    for (var mes = 0; mes < calendario.diasDoMes.length; mes++) {
        var prop = { "class": "col bloco-dia" }

        if (calendario.diasDoMes[mes].dia == calendario.hoje.dia) {
            calendario.diasDoMes[mes].atual = true
            prop.class = "col bloco-dia bloco-dia-atual"
        }
        
        if (calendario.diasDoMes[mes].posicaoCalendario == 1) {
            divLinha1.appendChild(CriarElementoHTML("div", prop, calendario.diasDoMes[mes].dia))
        }
        if (calendario.diasDoMes[mes].posicaoCalendario == 2) {
            divLinha2.appendChild(CriarElementoHTML("div", prop, calendario.diasDoMes[mes].dia))
        }
        if (calendario.diasDoMes[mes].posicaoCalendario == 3) {
            divLinha3.appendChild(CriarElementoHTML("div", prop, calendario.diasDoMes[mes].dia))
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

    return articleCalendario
}

function CriarElementoHTML(tag, prop, texto) {
    const elemento = document.createElement(tag)

    if (prop.id != null) {
        elemento.setAttribute("id", prop.id)
    }
    if (prop.class != null) {
        elemento.setAttribute("class", prop.class)
    }
    if (prop.src != null) {
        elemento.setAttribute("src", prop.src)
    }

    elemento.appendChild(document.createTextNode(texto))
    return elemento
}