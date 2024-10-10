import { pegarCss } from "./comum.js";

async function graficosCalçados() {
    const url = 'https://raw.githubusercontent.com/andrezito007/2024-3DS-API-marcasDeCal-ado/refs/heads/main/link%20la%20do%20script';
    const res = await fetch(url);
    const dados = await res.json();

    const calçadosVotados = dados.slice(1).map(item => item[2]);

    const contagemCalçados = calçadosVotados.reduce((acc, calçado) => {
        calçado.split(',').forEach(calçadoIndividual => {
            calçadoIndividual = calçadoIndividual.trim();
            acc[calçadoIndividual] = (acc[calçadoIndividual] || 0) + 1;
        });
        return acc;
    }, {});

    const valores = Object.values(contagemCalçados);
    const etiqueta = Object.keys(contagemCalçados);

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];

    const layout = {
        plot_bgcolor: pegarCss('--melao'),
        paper_bgcolor: pegarCss('--azul-fraquinho')
    };

    const pesquisaTitulo = document.createElement('h3');
    pesquisaTitulo.classList.add('caixa-grafico__titulo');
    pesquisaTitulo.innerHTML = `Os calçados mais consumidos na escola <span>Tancredo</span>`;

    const grafico = document.createElement('div');
    grafico.className = 'grafico-disco';
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo);
    document.getElementById('caixa-grafico').appendChild(grafico);
    const config = {
        responsive: true,
        displayModeBar: false
    };
    Plotly.newPlot(grafico, data, layout, config);

    const caixa = document.getElementById('caixa-grafico');
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = 'É possível ver que o calçados mais consumido na escola <span>Tancredo</span> são iguais as preferências globais. Os alunos escolheram a <span>Nike</span> como o calçado mais consumido, pesquisas globais indicam que calçados como <span>Adidas</span> e <span>Vans</span> também têm grande número de consumidores.';

    caixa.appendChild(paragrafo);
}

graficosCalçados();