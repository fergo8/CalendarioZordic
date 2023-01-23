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

    menu.appendChild(CriarElementoHTML(
        "button", 
        { 
            "class": "btn btn-light btn-hoje",
            "onclick": "MudarMes(0)" 
        }, 
        "Hoje"
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

    var diasDoMes = 0

    if (calendario.hoje.mes == 13) {
        diasDoMes = calendario.indicaBissexto ? 6 : 5
    }
    else {
        diasDoMes = calendario.diasDoMes.length
    }

    for (var mes = 0; mes < diasDoMes; mes++) {
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

    var diasDoMes = 0

    if (calendario.hoje.mes == 13) {
        diasDoMes = calendario.indicaBissexto ? 6 : 5
    }
    else {
        diasDoMes = calendario.diasDoMes.length
    }

    for (var mes = 0; mes < diasDoMes; mes++) {
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
    const calendario = new Calendario(new Date(Date.now()))
    var dia = calendario.hoje.dia
    var mes = calendario.hoje.mes
    var ano = calendario.hoje.ano

    var app = document.getElementById("app")
    var contador = parseInt(document.getElementById("contador").innerHTML)
    app.innerHTML = ""
    
    if (valor == 0) {
        contador = valor
    }
    else {
        contador += valor
    }
    
    document.getElementById("contador").innerHTML = contador
    
    mes += contador

    while (mes > 13) {
        mes -= 13
        ano += 1
    }

    while (mes < 1) {
        mes += 13
        ano -= 1
    }

    calendario.hoje.dia = dia
    calendario.hoje.mes = mes
    calendario.hoje.ano = ano

    calendario.indicaBissexto = calendario.EhAnoBissexto(ano)
    
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
    
    if (dataGregoriano.value == "" && dataCalendarioNovo.value == "") {
        console.log("Datas não foram preenchidas")
        return
    }

    var data = conversor.ConverterData(dataGregoriano, dataCalendarioNovo)

    console.log(data)
    if (dataGregoriano.value == "") {
        dataGregoriano.value = AjustarFormatoData(data)
    } else {
        data = conversor.AjustarDecimoTerceiroMes(data)
        dataCalendarioNovo.value = AjustarFormatoDataCalendarioNovo(data)
    }
}

function AjustarFormatoData(data) {
    var ano = data.ano.toString()
    var mes = data.mes.toString()
    var dia = data.dia.toString()

    if(mes.length < 2)
        mes = "0" + mes
    if(dia.length < 2)
        dia = "0" + dia

    return ano + "-" + mes + "-" + dia
}

function AjustarFormatoDataCalendarioNovo(data) {
    var ano = data.ano.toString()
    var mes = data.mes.toString()
    var dia = data.dia.toString()

    if(mes.length < 2)
        mes = "0" + mes
    if(dia.length < 2)
        dia = "0" + dia

    return dia + " / " + mes + " / " + ano
}
