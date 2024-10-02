function pegarCss(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configuraEixo = {
    color: pegarCss('--melao'),
    size: 23,
    family: pegarCss('--fonte-texto')
}

export{pegarCss, configuraEixo}