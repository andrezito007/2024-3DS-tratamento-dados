import { pegarCss } from "./comum.js"

async function graficosTancredo(){
    const url = 'https://raw.githubusercontent.com/andrezito007/2024-3DS-API-marcasDeCal-ado/refs/heads/main/link%20la%20do%20script'
    const res = await fetch(url)
    const dados = await res.json()
    const salasParticipantes = dados.slice(1).map(classe => classe[1])
    const contagemSalas = salasParticipantes.reduce((acc, salasParticipantes) => {
        acc[salasParticipantes] = (acc[salasParticipantes] || 0) + 1 
        return acc
    }, {})

    const valores = Object.values(contagemSalas)
    const etiqueta = Object.keys(contagemSalas)

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
    const layout = 
    {
        plot_bgcolor: pegarCss('--melao'),
        paper_bgcolor: pegarCss('--azul-fraquinho'),
        font:{
            color: pegarCss('--melao'),
            family: pegarCss('--fonto-titulo'),
            size: 16,
        }
    }

    const pesquisaTitulo = document.createElement('h3')
    pesquisaTitulo.classList.add('caixa-grafico__titiulo')
    pesquisaTitulo.innerHTML = `Turmas do  <span>Tancredo</span> que mais votaram`
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displeyModeBar: false
    }
    Plotly.newPlot(grafico, data, layout)

    console.table(dados.slice(1))
}

graficosTancredo()