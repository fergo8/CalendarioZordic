class Calendario {
    constructor() {
        var diaDeHoje = new Date(Date.now())

        this.hojeGregoriano = {
            "dia": diaDeHoje.getDate(),
            "mes": diaDeHoje.getMonth() + 1,
            "ano": diaDeHoje.getFullYear()
        }

        this.diaDeReferenciaGregoriano = { "dia": 22, "mes": 9, "ano": 2022 }

        this.hoje = { "dia": null, "mes": null, "ano": null }

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

        var qtdDias = CalcularQuantidadeDeDias(diaDeReferenciaGregoriano, hojeGregoriano)

        console.log(qtdDias)

        return hoje
    }
    
    CalcularQuantidadeDeDias(diaDeReferenciaGregoriano, hojeGregoriano) {
        var qtdDiasReferencia = DataParaQuantidadeDeDias(diaDeReferenciaGregoriano)
        var qtdDiasAteHoje = DataParaQuantidadeDeDias(hojeGregoriano)

        return qtdDiasAteHoje - qtdDiasReferencia
    }

    DataParaQuantidadeDeDias(data) {
        var qtdDias = 0
        var meses = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

        // Soma os dias de cada mês do dia 01/01/0001 até a data em questão, desconsiderando regra de anos bissextos
        qtdDias += (data.ano - 1) * 365

        for(mes = 1; mes < data.mes; mes++) {
            qtdDias += meses[mes-1]
        }

        qtdDias += data.dia

        // Calcula dias extras por anos bissextos
        var diasExtras = (data.ano / 4) - (data.ano / 100) + (data.ano / 400)

        // Adiciona +1 dia caso ano atual seja bissexto e já tenha passado de fevereiro
        if(ehBissexto(data.ano) && (data.mes - 1) >= 2) {
            qtdDias += 1;
        }

        return qtdDias
    }

    EhAnoBissexto(ano) {
        return (ano % 4 == 0) && (ano % 100 != 0 || ano % 400 == 0);
    }
}