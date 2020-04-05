const fs=require('fs')
const produto={nome:'TV 4K 43',preco:1800,desconto:0.01}
fs.writeFile(__dirname+'/arquivogerado.json',JSON.stringify(produto),err=>{
    console.log(err||'Arquivo Salvo!')
})









