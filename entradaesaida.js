const anonimo=process.argv.indexOf('-a')!==-1
if(anonimo){
process.stdout.write('Fala Anonimo:\n')
process.exit()}
else{
    process.stdout.write('Insira seu nome:')//Saida de dados
    process.stdin.on('data',data=>{//Entrada de dados no teclado
        const nome=data.toString()
        process.stdout.write(`Fala ${nome}`)
        process.exit()
    })
}









