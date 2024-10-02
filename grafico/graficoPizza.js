async function criagraficoPizza(){
    const url = 'https://raw.githubusercontent.com/andrezito007/2024-3DS-API-marcasDeCal-ado/refs/heads/main/cal%C3%A7ados-numero-votos.json'
    const res = await fetch(url)
    const dados = await res.json()
}

criagraficoPizza()