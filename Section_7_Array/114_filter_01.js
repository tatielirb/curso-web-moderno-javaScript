//filter 01
//filtrar um array

const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'ipad pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
  {nome: 'Copo de Plastico', preco: 18.99, fragil: false}  
]

console.log(produtos.filter(function(p){
  return false
  //vazio
}))

console.log(produtos.filter(function(p){
  return true
  //todos os elementos
}))

console.log(produtos.filter(function(p){
  return p.preco > 2400
  //filtra a condição
}))

console.log(produtos.filter(function(p){
  return p.fragil == true
  //filtra a condição
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))