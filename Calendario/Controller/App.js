document.addEventListener("DOMContentLoaded", function(e) {
    var app = document.getElementById("app")
    const calendario = new Calendario(new Date(Date.now()))

    app.appendChild(GerarMenuSuperior(calendario))
    app.appendChild(GerarCalendario(calendario))
    app.appendChild(GerarMiniCalendario(calendario))
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
        "CALENDÁRIO"
    ))

    articleMenu.appendChild(CriarElementoHTML(
        "i", 
        { 
            "class": "fa-solid fa-angle-left seta",
            "onclick": "MudarParaMesAnterior(" + calendario.hoje.dia + ", " + calendario.hoje.mes + ", " + calendario.hoje.ano + ")"
        }, 
        ""
    ))

    articleMenu.appendChild(CriarElementoHTML(
        "span", 
        { "class": "mes-ano-selecionado" }, 
        "Mês " + calendario.hoje.mes + " de " + calendario.hoje.ano
    ))

    articleMenu.appendChild(CriarElementoHTML(
        "i", 
        { 
            "class": "fa-solid fa-angle-right seta",
            "onclick": "MudarParaMesProximo(" + calendario.hoje.dia + ", " + calendario.hoje.mes + ", " + calendario.hoje.ano + ")" 
        }, 
        ""
    ))

    return articleMenu
}

function GerarCalendario(calendario) {
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
    console.log("Hoje: " + calendario.hoje.dia + "/" + calendario.hoje.mes + "/" + calendario.hoje.ano)
    
    return articleCalendario
}

function GerarMiniCalendario(calendario) {
    const article = document.createElement("article")
    article.setAttribute("class", "article-mini-calendario")

    const divPrincipal = document.createElement("div")
    divPrincipal.setAttribute("class", "row")

    const divMiniCalendario = document.createElement("div")
    divMiniCalendario.setAttribute("class", "col-3 mini-calendario")

    const divLinhaTitulo = document.createElement("div")
    const divLinha1 = document.createElement("div")
    const divLinha2 = document.createElement("div")
    const divLinha3 = document.createElement("div")
    divLinhaTitulo.setAttribute("class", "row")
    divLinha1.setAttribute("class", "row")
    divLinha2.setAttribute("class", "row")
    divLinha3.setAttribute("class", "row")

    for (var mes = 0; mes < calendario.diasDoMes.length; mes++) {
        var prop = { "class": "col bloco-mini-dia" }

        if (calendario.diasDoMes[mes].dia == calendario.hoje.dia) {
            calendario.diasDoMes[mes].atual = true
            prop.class = "col bloco-mini-dia bloco-mini-dia-atual"
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

    divLinhaTitulo.appendChild(CriarElementoHTML(
        "div", 
        { "class": "col-12 mes-ano-selecionado-mini" }, 
        "Mês " + calendario.hoje.mes + " de " + calendario.hoje.ano
    ))

    divMiniCalendario.appendChild(divLinhaTitulo)
    divMiniCalendario.appendChild(divLinha1)
    divMiniCalendario.appendChild(divLinha2)
    divMiniCalendario.appendChild(divLinha3)

    divPrincipal.appendChild(divMiniCalendario)

    divPrincipal.appendChild(CriarElementoHTML(
        "div",
        { "class": "col-1" },
        ""
    ))
    
    divPrincipal.appendChild(CriarElementoHTML(
        "div",
        { "class": "col-8 bloco-notas" },
        ""
    ))

    article.appendChild(divPrincipal)

    return article
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
    if (prop.onclick != null) {
        elemento.setAttribute("onclick", prop.onclick)
    }

    elemento.appendChild(document.createTextNode(texto))
    return elemento
}

function MudarParaMesAnterior(dia, mes, ano) {
    console.log("MudarParaMesAnterior")
}

function MudarParaMesProximo(dia, mes, ano) {
    var app = document.getElementById("app")
    var contador = parseInt(document.getElementById("contador").innerHTML)
    app.innerHTML = ""
    
    console.log(contador)
    contador += 1
    console.log(contador)
    
    document.getElementById("contador").innerHTML = contador
    
    mes += contador
    
    if (mes > 13) {
        mes -= 13
        ano += 1
    }
    
    console.log(contador)
    console.log("teste próximo mês")
    const calendario = new Calendario(new Date(ano, mes, dia))

    app.appendChild(GerarMenuSuperior(calendario))
    app.appendChild(GerarCalendario(calendario))
    app.appendChild(GerarMiniCalendario(calendario))
}