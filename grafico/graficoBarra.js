import { pegarCss, configuraEixo } from "./comum.js"

async function criarBarraGráfico(){
    const url = 'https://raw.githubusercontent.com/andrezito007/2024-3DS-API-marcasDeCal-ado/refs/heads/main/cal%C3%A7ados-numero-votos.json'
    const res = await fetch(url)
    const dados = await res.json()
    const calcados = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: calcados,
            y: votos,
            type: 'bar',
            marker: {
                color: pegarCss('--melao')
            }
        }
    ]
    const layout = {
        plot_bgcolor: pegarCss('--azul-fraquinho'),
        paper_bgcolor: pegarCss('--azul-fraquinho'),
        height:600,
        title:{
            text: ' Ranking atual dos calçados ',
            font: {
                color: pegarCss('--melao'),
                family: pegarCss('--fonte-titulo'),
                size: 40
            }
        },
        xaxis: {
            tickfont: configuraEixo
        },
        yaxis:{
            tickfont: configuraEixo
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'gráfico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

    
}

criarBarraGráfico()