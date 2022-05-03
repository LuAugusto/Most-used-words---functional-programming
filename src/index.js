const path = require('path')
const fn = require('./funcao.js')

const caminho = path.join(__dirname, '..','legendas')

const simbolos = [
    '.', '?', '-', ',', '', '"', '♪', '_', '<i>', '</i>', '\r',
    '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
    .then(fn.mesclasElementos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerSeVazio)
    .then(linhas => fn.removerSeIncluir(linhas,'-->'))
    .then(fn.removerSeApenasNumeros)
    .then(fn.removerCaracteres(simbolos))
    .then(fn.mesclasElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerSeApenasNumeros)
    .then(fn.agruparPalavras)
    .then(fn.ordenarPorAtributoNumerico('qtde','desc'))
    .then(console.log)


