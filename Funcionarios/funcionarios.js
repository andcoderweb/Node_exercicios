const url='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios=require('axios')
const localidade=f=>f.pais==='China'
const genero=f=>f.genero==='F'
const salario=(func,funcionario)=>{
    return func.salario<funcionario.salario?func:funcionario
}
axios.get(url).then(response=>{
    const funcionarios=response.data
    //console.log(funcionarios)
    const func=funcionarios.filter(localidade).filter(genero).reduce(salario)
    console.log(func)
})