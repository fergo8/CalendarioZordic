class Calendario {
    constructor() {
        var diaDeHoje = new Date(Date.now())

        this.hojeGregoriano = {
            "dia": 25,  //diaDeHoje.getDate(),
            "mes": 6,  //diaDeHoje.getMonth() + 1,
            "ano": 2022 //diaDeHoje.getFullYear()
        }

        this.diaDeReferenciaGregoriano = { "dia": 22, "mes": 9, "ano": -305 }

        this.hoje = this.GerarDiaDeHoje(this.diaDeReferenciaGregoriano, this.hojeGregoriano)

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

    EhAnoBissexto(ano) {
        return (ano % 4 == 0) && (ano % 100 != 0 || ano % 400 == 0);
    }

    DataParaQuantidadeDeDias(data) {
        var qtdDias = 0
        var meses = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
        var linha = 0

        // Soma os dias de cada mês do dia 22/09/-305 até a data em questão, desconsiderando regra de anos bissextos
        linha = 1
        var ano = 305 + data.ano
        qtdDias += (ano - 1) * 365

        console.log("Linha" + linha)
        console.log(qtdDias)

        linha = 2
        for (var mes = 1; mes < data.mes; mes++) {
            qtdDias += meses[mes-1]
        }
        
        console.log("Linha" + linha)
        console.log(qtdDias)

        linha = 3
        qtdDias += data.dia
        
        console.log("Linha" + linha)
        console.log(qtdDias)

        linha = 4
        // Calcula dias extras por anos bissextos
        var diasExtras = Math.floor((ano / 4) - (ano / 100) + (ano / 400))
        
        console.log("Linha" + linha)
        console.log(qtdDias)

        linha = 5
        qtdDias += diasExtras

        console.log("Linha" + linha)
        console.log(qtdDias)

        linha = 6
        // Adiciona +1 dia caso ano atual seja bissexto e já tenha passado de fevereiro
        if (this.EhAnoBissexto(data.ano) && (data.mes - 1) >= 2) {
            qtdDias += 1;
        }
        
        console.log("Linha" + linha)
        console.log(qtdDias)

        return qtdDias
    }
    
    CalcularQuantidadeDeDias(data) {
        return this.DataParaQuantidadeDeDias(data)
    }

    CalcularDiaDeHoje(qtdDias, diaDeReferencia) {
        var hoje = { "dia": 0, "mes": 0, "ano": 0 }
        var qtdMeses = 0
        var qtdAnos = 0

        // Valida se quantidade de dias é negativo
        if (qtdDias < 0) {
            console.log("Quantidade de dias negativo: " + qtdDias)
            return hoje
        }

        //var qtdCiclosBissextosPassados = Math.floor(qtdDias / 1461)

        //if (qtdCiclosBissextosPassados > 0) {
        //    qtdAnos += qtdCiclosBissextosPassados * 4
        //}

        // código antigo
        if (qtdDias > 30) {
            qtdMeses = Math.floor(qtdDias / 30)
            qtdDias = qtdDias - (qtdMeses * 30)
        }

        if ((qtdMeses) > 0) {
            qtdAnos = Math.floor(qtdMeses / 12)
            qtdMeses = qtdMeses - (qtdAnos * 12)
        }

        hoje = { 
            "dia": diaDeReferencia.dia + qtdDias,
            "mes": diaDeReferencia.mes + qtdMeses,
            "ano": diaDeReferencia.ano + qtdAnos
        }
        // fim código antigo

        return hoje
    }

    GerarDiaDeHoje(diaDeReferenciaGregoriano, hojeGregoriano) {
        var hoje = { "dia": 0, "mes": 0, "ano": 0 }
        
        var qtdDias = this.CalcularQuantidadeDeDias(hojeGregoriano)

        hoje = this.CalcularDiaDeHoje(qtdDias, diaDeReferenciaGregoriano)

        return hoje
    }
}