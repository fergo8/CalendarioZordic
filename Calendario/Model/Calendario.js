class Calendario {
    constructor() {
        var diaDeHoje = new Date(Date.now())

        this.hojeGregoriano = {
            "dia": diaDeHoje.getDate(),
            "mes": diaDeHoje.getMonth() + 1,
            "ano": diaDeHoje.getFullYear()
        }

        this.diaDeReferenciaGregoriano = { "dia": 22, "mes": 9, "ano": 2022 }

        this.hoje = { "dia": 0, "mes": 0, "ano": 0 }

        this.diasDoMes = [
            { "dia": 1, "atual": false },
            { "dia": 2, "atual": false },
            { "dia": 3, "atual": false },
            { "dia": 4, "atual": false },
            { "dia": 5, "atual": false },
            { "dia": 6, "atual": false },
            { "dia": 7, "atual": false },
            { "dia": 8, "atual": false },
            { "dia": 9, "atual": false },
            { "dia": 10, "atual": false },
            { "dia": 11, "atual": false },
            { "dia": 12, "atual": false },
            { "dia": 13, "atual": false },
            { "dia": 14, "atual": false },
            { "dia": 15, "atual": false },
            { "dia": 16, "atual": false },
            { "dia": 17, "atual": false },
            { "dia": 18, "atual": false },
            { "dia": 19, "atual": false },
            { "dia": 20, "atual": false },
            { "dia": 21, "atual": false },
            { "dia": 22, "atual": false },
            { "dia": 23, "atual": false },
            { "dia": 24, "atual": false },
            { "dia": 25, "atual": false },
            { "dia": 26, "atual": false },
            { "dia": 27, "atual": false },
            { "dia": 28, "atual": false },
            { "dia": 29, "atual": false },
            { "dia": 30, "atual": false }
        ]
    }

    GerarDiaDeHoje(diaDeReferenciaGregoriano, hojeGregoriano) {
        var hoje = { "dia": 0, "mes": 0, "ano": 0 }
        var diaDeReferencia = { "dia": 1, "mes": 1, "ano": 2327 }



        return hoje
    }
    
}