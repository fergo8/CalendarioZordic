class Calendario {
    constructor() {
        var hojeGregoriano = new Date(Date.now())

        this.hoje = {
            "dia": hojeGregoriano.getDate(),
            "mes": hojeGregoriano.getMonth() + 1,
            "ano": hojeGregoriano.getFullYear()
        }

        this.inicioDoCalendario = { "dia": 22, "mes": 9, "ano": -305 }
    }
}