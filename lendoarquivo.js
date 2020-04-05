const fs=require("fs")
const caminho= __dirname+'/arquivo.json'//Dir name usar dois underline
// leitura sincrono
const conteudo=fs.readFileSync(caminho,"utf-8")
console.log(conteudo)
// leitura Assincrono
fs.readFileSync(caminho,"utf-8",(err,conteudo)=>{
    const config=conteudo
    console.log(config)
})
//outra maneira
const escrever=require("./arquivo.json")
console.log(escrever.db)
//Lendo Diretório
fs.readdir(__dirname,(err,arquivos)=>{
    console.log(arquivos)
})