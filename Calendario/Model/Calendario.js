class Calendario {
    constructor(diaDeHoje) {
        this.hojeGregoriano = {
            "dia": diaDeHoje.getDate(),
            "mes": diaDeHoje.getMonth() + 1,
            "ano": diaDeHoje.getFullYear()
        }

        this.diaDeReferenciaGregoriano = { "dia": 8, "mes": 3, "ano": 305 }

        this.hoje = this.GerarDiaDeHoje(this.diaDeReferenciaGregoriano, this.hojeGregoriano)

        this.indicaBissexto = this.EhAnoBissexto(this.hoje.ano)

        this.diasDoMes = [
            { "dia": 1, "atual": false, "posicaoCalendario": 1 },
            { "dia": 2, "atual": false, "posicaoCalendario": 1 },
            { "dia": 3, "atual": false, "posicaoCalendario": 1 },
            { "dia": 4, "atual": false, "posicaoCalendario": 1 },
            { "dia": 5, "atual": false, "posicaoCalendario": 1 },
            { "dia": 6, "atual": false, "posicaoCalendario": 1 },
            { "dia": 7, "atual": false, "posicaoCalendario": 1 },
            { "dia": 8, "atual": false, "posicaoCalendario": 1 },
            { "dia": 9, "atual": false, "posicaoCalendario": 1 },
            { "dia": 10, "atual": false, "posicaoCalendario": 1 },
            { "dia": 11, "atual": false, "posicaoCalendario": 2 },
            { "dia": 12, "atual": false, "posicaoCalendario": 2 },
            { "dia": 13, "atual": false, "posicaoCalendario": 2 },
            { "dia": 14, "atual": false, "posicaoCalendario": 2 },
            { "dia": 15, "atual": false, "posicaoCalendario": 2 },
            { "dia": 16, "atual": false, "posicaoCalendario": 2 },
            { "dia": 17, "atual": false, "posicaoCalendario": 2 },
            { "dia": 18, "atual": false, "posicaoCalendario": 2 },
            { "dia": 19, "atual": false, "posicaoCalendario": 2 },
            { "dia": 20, "atual": false, "posicaoCalendario": 2 },
            { "dia": 21, "atual": false, "posicaoCalendario": 3 },
            { "dia": 22, "atual": false, "posicaoCalendario": 3 },
            { "dia": 23, "atual": false, "posicaoCalendario": 3 },
            { "dia": 24, "atual": false, "posicaoCalendario": 3 },
            { "dia": 25, "atual": false, "posicaoCalendario": 3 },
            { "dia": 26, "atual": false, "posicaoCalendario": 3 },
            { "dia": 27, "atual": false, "posicaoCalendario": 3 },
            { "dia": 28, "atual": false, "posicaoCalendario": 3 },
            { "dia": 29, "atual": false, "posicaoCalendario": 3 },
            { "dia": 30, "atual": false, "posicaoCalendario": 3 }
        ]
    }

    EhAnoBissexto(ano) {
        return (ano % 4 == 0) && (ano % 100 != 0 || ano % 400 == 0);
    }

    CalcularQuantidadeDeDias(diaDeReferenciaGregoriano, dataGregoriano) {
        var qtdDias = 0
        var meses = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
        var linha = 0

        // Soma os dias de cada mês do dia 22/09/-305 até a data em questão,
        // desconsiderando regra de anos bissextos
        linha = 1
        var ano = diaDeReferenciaGregoriano.ano + dataGregoriano.ano - 1
        qtdDias += (ano - 1) * 365

        console.log("Linha" + linha)
        console.log(qtdDias)

        linha = 2
        var totalMeses = dataGregoriano.mes
        for (var mes = 1; mes < totalMeses; mes++) {
            qtdDias += meses[mes-1]
        }
        // Soma os dias de Outubro, Novembro e Dezembro de 305 a.C.
        if (dataGregoriano.ano > -305) {
            qtdDias += 31 + 30 + 31
        }
        
        console.log("Linha" + linha)
        console.log(qtdDias)

        linha = 3
        qtdDias += (diaDeReferenciaGregoriano.dia + dataGregoriano.dia)
        
        console.log("Linha" + linha)
        console.log(qtdDias)

        linha = 4
        // Calcula dias extras por anos bissextos
        var diasExtras = Math.floor((ano / 4) - (ano / 100) + (ano / 400))
        
        qtdDias += diasExtras

        console.log("Linha" + linha)
        console.log(qtdDias)

        linha = 5
        // Adiciona +1 dia caso ano atual seja bissexto e já tenha passado de fevereiro
        if (this.EhAnoBissexto(dataGregoriano.ano) && (dataGregoriano.mes - 1) >= 2) {
            qtdDias += 1;
        }
        
        console.log("Linha" + linha)
        console.log(qtdDias)

        return qtdDias + 18
    }
    
    CalcularQuantidadeDeDiasGregoriano(ano, mes, dia) {
        var qtdDias = 0

        // Calcula quantidade de dias extras pelos anos bissextos
        var diasExtras = Math.floor(ano / 4)

        qtdDias += (ano - 1) * 365
        qtdDias += (mes - 1) * 30
        qtdDias += dia + diasExtras

        return qtdDias
    }

    CalcularDiaDoCalendarioNovo(qtdDias, diaDeReferencia) {
        var data = { "dia": 0, "mes": 0, "ano": 0 }
        var qtdMeses = 0
        var qtdAnos = 0

        // Valida se quantidade de dias é negativo
        if (qtdDias < 0) {
            console.log("Quantidade de dias negativo: " + qtdDias)
            return data
        }

        // Calcula quantidade de dias extras pelos anos bissextos
        var diasExtras = Math.floor(qtdDias / 1461)

        // Calcula anos do calendário novo
        if (diasExtras > 0) {
            qtdAnos += diasExtras * 4 + 1
            qtdDias = qtdDias - (diasExtras * 1461)
        }

        if (qtdDias > 365) {
            var anosAdicionais = Math.floor(qtdDias / 365)
            qtdAnos += anosAdicionais
            qtdDias = qtdDias - (anosAdicionais * 365)
        }

        // Calcula meses do calendário novo
        qtdMeses = Math.floor(qtdDias / 30) + 1

        if (qtdMeses > 1) {
            qtdDias = qtdDias - ((qtdMeses - 1) * 30)
        }

        // Gera objeto 
        data = { 
            "dia": qtdDias,
            "mes": qtdMeses,
            "ano": qtdAnos
        }

        return data
    }

    CalcularDiaDoGregoriano(qtdDias) {
        var data = { "dia": 0, "mes": 0, "ano": 0 }
        var meses = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

        // Valida se quantidade de dias é negativo
        if (qtdDias < 0) {
            console.log("Quantidade de dias negativo: " + qtdDias)
            return data
        }

        // Calcula quantidade de anos bissextos
        var qtdAnosBissextos = Math.floor(qtdDias / 1461)

        // Calcula quantidade de anos
        var qtdAnos = Math.floor((qtdDias - qtdAnosBissextos) / 365)

        // Calcula quantidade de dias do ano atual
        var qtdDiasAnoAtual = qtdDias - qtdAnosBissextos - (qtdAnos * 365)

        // Calcula quantidade de meses
        var qtdMeses = Math.floor(qtdDiasAnoAtual / 30)

        // Calcula quantidade de dias
        for (let mes = 0; mes < qtdMeses; mes++) {
            qtdDiasAnoAtual -= meses[mes];
        }

        qtdDias = qtdDiasAnoAtual

        // Gera objeto 
        data = { 
            "dia": qtdDias,
            "mes": qtdMeses,
            "ano": qtdAnos
        }

        return data
    }

    GerarDiaDeHoje(diaDeReferenciaGregoriano, hojeGregoriano) {
        var hoje = { "dia": 0, "mes": 0, "ano": 0 }

        console.log(hojeGregoriano.dia + "/" + hojeGregoriano.mes + "/" + hojeGregoriano.ano)
        var qtdDias = this.CalcularQuantidadeDeDias(diaDeReferenciaGregoriano, hojeGregoriano)

        console.log("qtdDias (greg to novo) = " + qtdDias)
        hoje = this.CalcularDiaDoCalendarioNovo(qtdDias, diaDeReferenciaGregoriano)

        return hoje
    }

    ConverterParaGregoriano(ano, mes, dia) {
        var dataGregoriano = { "dia": 0, "mes": 0, "ano": 0 }

        console.log(ano + "/" + mes + "/" + dia)
        var qtdDias = this.CalcularQuantidadeDeDiasGregoriano(ano, mes, dia)

        console.log("qtdDias (novo to greg) = " + qtdDias)
        dataGregoriano = this.CalcularDiaDoGregoriano(qtdDias)

        return dataGregoriano
    }
}