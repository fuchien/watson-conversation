var socios = [
  {nome: 'chien', id: 4},
  {nome: 'mirna', id: 3},
  {nome: 'felipe', id: 2},
  {nome: 'amanda', id: 1}
]
var idades = [
  {age: 21, id: 1},
  {age: 22, id: 2},
  {age: 23, id: 3},
  {age: 24, id: 4}
] 


// console.log(id)
let pessoas = []
let socio = socios.map(function(el, x) {
  let id = idades.find((value, index) => {

    return value.id === el.id
  })
  console.log(id)
  el.age = id.age;
  return el;
})

console.log(socio)