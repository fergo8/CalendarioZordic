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
    
    const menu = document.createElement("div")
    menu.setAttribute("class", "menu-superior")
    
    menu.appendChild(CriarElementoHTML(
        "img", 
        {
            "id": "logo",
            "src": "../Images/Logo.png"
        },
        ""
    ))

    menu.appendChild(CriarElementoHTML(
        "h1", 
        { "id": "titulo" }, 
        "CALENDÁRIO"
    ))

    menu.appendChild(CriarElementoHTML(
        "i", 
        { 
            "class": "fa-solid fa-angle-left seta",
            "onclick": "MudarMes(-1)"
        }, 
        ""
    ))

    menu.appendChild(CriarElementoHTML(
        "span", 
        { "class": "mes-ano-selecionado" }, 
        "Mês " + calendario.hoje.mes + " de " + calendario.hoje.ano
    ))

    menu.appendChild(CriarElementoHTML(
        "i", 
        { 
            "class": "fa-solid fa-angle-right seta",
            "onclick": "MudarMes(1)" 
        }, 
        ""
    ))

    articleMenu.appendChild(menu)
    articleMenu.appendChild(GerarConversor())

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

function MudarMes(valor) {
    var dia = new Date(Date.now()).getDate()
    var mes = new Date(Date.now()).getMonth()
    var ano = new Date(Date.now()).getFullYear()

    var app = document.getElementById("app")
    var contador = parseInt(document.getElementById("contador").innerHTML)
    app.innerHTML = ""
    
    contador += valor
    
    document.getElementById("contador").innerHTML = contador
    
    mes += contador

    if (mes > 11) {
        mes -= 11
        ano += 1
    }

    if (mes < 0) {
        mes += 11
        ano -= 1
    }
    
    const calendario = new Calendario(new Date(ano, mes, dia))

    app.appendChild(GerarMenuSuperior(calendario))
    app.appendChild(GerarCalendario(calendario))
    app.appendChild(GerarMiniCalendario(calendario))
}

function GerarConversor() {
    var conversor = new Conversor()
    return conversor.layout
}

function ConverterData() {
    var conversor = new Conversor()
    var dataGregoriano = document.getElementById("data-gregoriano")
    var dataCalendarioNovo = document.getElementById("data-calendario-novo")
    
    var data = conversor.ConverterData(dataGregoriano, dataCalendarioNovo)

    if (dataGregoriano.value != "") {
        dataCalendarioNovo.value = data.dia.toString() + data.mes.toString() + data.ano.toString()
    }
}