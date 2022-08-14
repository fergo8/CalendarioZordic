class Conversor {
    constructor() {
        this.layout = this.GerarLayout()
    }

    GerarLayout() {
        const divConversor = document.createElement("div")
        divConversor.setAttribute("class", "conversor")

        const div1 = document.createElement("div")
        const div2 = document.createElement("div")
        const div3 = document.createElement("div")
        div1.setAttribute("class", "conversor-div1")
        div2.setAttribute("class", "conversor-div2")
        div3.setAttribute("class", "conversor-div3")

        const formConversor = document.createElement("form")
        formConversor.setAttribute("class", "conversor-form")

        const labelGregoriano = document.createElement("label")
        labelGregoriano.setAttribute("class", "conversor-label")
        labelGregoriano.innerText = "Gregoriano"
        
        const labelCalendario = document.createElement("label")
        labelCalendario.setAttribute("class", "conversor-label")
        labelCalendario.innerText = "Calendário novo"
        
        const inputGregoriano = document.createElement("input")
        inputGregoriano.setAttribute("class", "conversor-input")
        inputGregoriano.setAttribute("id", "data-gregoriano")
        inputGregoriano.setAttribute("type", "date")
        
        const inputCalendario = document.createElement("input")
        inputCalendario.setAttribute("class", "conversor-input")
        inputCalendario.setAttribute("id", "data-calendario-novo")
        inputCalendario.setAttribute("type", "date")
        
        const submit = document.createElement("button")
        submit.setAttribute("class", "btn btn-secondary btn-sm conversor-submit")
        submit.setAttribute("id", "btn-converter")
        submit.setAttribute("type", "button")
        submit.setAttribute("onclick", "ConverterData()")
        submit.innerText = "Converter"

        div1.appendChild(labelGregoriano)
        div1.appendChild(inputGregoriano)

        div2.appendChild(submit)

        div3.appendChild(labelCalendario)
        div3.appendChild(inputCalendario)

        formConversor.appendChild(div1)
        formConversor.appendChild(div2)
        formConversor.appendChild(div3)

        divConversor.appendChild(formConversor)

        return divConversor
    }

    ConverterData(dataGregoriano, dataCalendarioNovo) {
        console.log(dataGregoriano.value)
        console.log(dataCalendarioNovo.value)

        const calendario = new Calendario(new Date(Date.now()))

        var hoje = { "dia": 0, "mes": 0, "ano": 0 }
        
        if (dataGregoriano.value != "") {
            var dataArray = dataGregoriano.value.split("-")
            var hojeGregoriano = { "dia": dataArray[2], "mes": dataArray[1], "ano": dataArray[0] }
            var qtdDias = calendario.CalcularQuantidadeDeDias(calendario.diaDeReferenciaGregoriano, hojeGregoriano)
    
            hoje = calendario.CalcularDiaDoCalendarioNovo(qtdDias, calendario.diaDeReferenciaGregoriano)
        }

        return hoje
    }
}