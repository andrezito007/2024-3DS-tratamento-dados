
async function criarBarraGráfico(){
    const url = 'https://raw.githubusercontent.com/andrezito007/2024-3DS-API-marcasDeCal-ado/refs/heads/main/10cal%C3%A7adosmaisconsumidos'
    const res = await fetch(url)
    const dados = await res.json()

    console.log()
}

criarBarraGráfico()