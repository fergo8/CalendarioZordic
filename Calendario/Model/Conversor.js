class Conversor {
    constructor() {
        this.layout = this.GerarLayout()
    }

    GerarLayout() {
        const divConversor = document.createElement("div")
        divConversor.setAttribute("class", "conversor")

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
        
        const inputCalendario = document.createElement("input")
        inputCalendario.setAttribute("class", "conversor-input")
        inputCalendario.setAttribute("id", "data-calendario-novo")
        
        const submit = document.createElement("buttom")
        submit.setAttribute("class", "conversor-submit")
        submit.setAttribute("id", "btm-converter")
        submit.setAttribute("type", "submit")

        formConversor.appendChild(labelGregoriano)
        formConversor.appendChild(labelCalendario)
        formConversor.appendChild(inputGregoriano)
        formConversor.appendChild(submit)
        formConversor.appendChild(inputCalendario)

        divConversor.appendChild(formConversor)

        return divConversor
    }
}