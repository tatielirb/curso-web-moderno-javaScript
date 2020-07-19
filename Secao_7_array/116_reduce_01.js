// reeduce 01

const alunos = [
  {nome: 'João', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true}  
]

console.log(alunos.map(a => a.nota))
//retorna todas as notas somadas dos alunos 
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
  console.log(acumulador, atual)
  return acumulador + atual
})

//resutado de todas as somas
console.log(resultado)

//passar um valor inicial

const resultado1 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
  console.log(acumulador, atual)
  return acumulador + atual
}, 10)
