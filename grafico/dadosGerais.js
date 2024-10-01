const url = 'https://raw.githubusercontent.com/andrezito007/2024-3DS-API-marcasDeCal-ado/refs/heads/main/10cal%C3%A7adosmaisconsumidos'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
    
    const calçadosMaisConsumidos = dados.votacao.marcas[0].marca
    const numeroDeParticipantes = dados.votacao.total_votantes
    const marcas = dados.votacao.marcas[0].marca


    console.log(marcas)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-gráfico__texto')
    paragrafo.innerHTML = ` Recentemente, a internet ficou louca para saber qual marca de calçado seria a mais consumida em 2024, foi feito um grande levantamento de pesquisas sobre quais são os calçados mais usados em diferentes fontes. Com o auxilio da inteligência artifical do google, foi possível estimar que o calçado mais consumido foi ${calçadosMaisConsumidos} com um total de votos de aproximadamente ${numeroDeParticipantes} nas marcas ${marcas}, Adidas, Puma, Reebok, New Balance, Vans, Converse, Asics, Hoka One One e Skechers.`

    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

}

vizualizarInformacoes()