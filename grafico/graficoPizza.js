import { pegarCss } from "./comum.js"

async function criagraficoPizza(){
    const url = 'https://raw.githubusercontent.com/andrezito007/2024-3DS-API-marcasDeCal-ado/refs/heads/main/cal%C3%A7ados-numero-votos.json'
    const res = await fetch(url)
    const dados = await res.json()
    const calcadosIndies = Object.keys(dados)
    const votosIndies = Object.values(dados)

    const data = [
        {
            values: votosIndies,
            labels: calcadosIndies,
            type: 'pie',
            textinfo: 'label + percent'
        }
    ]
    const layout = {
        height: 400,
        width: 600,
        plot_bgcolor: pegarCss('--melao'),
        paper_bgcolor: pegarCss('--azul-fraquinho')
    }

    const indiesTitulo = document.createElement('h3')
    indiesTitulo.classList.add('caixa-grafico__titulo')
    indiesTitulo.innerHTML = ` Os <span>calçados famosos</span> mais consumidos em 2023`

    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(indiesTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}


criagraficoPizza()