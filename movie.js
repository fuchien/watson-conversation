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
  // console.log(id)
  el.age = id.age;
  return el;
})

// console.log(socio)

// let dias = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
// console.log(dias)
let cur = new Date()
cur.setDate(cur.getDate() + 1);
// cur.toString().replace(/T/i, '')
// let data = cur.toString().slice(0,9)
// console.log(cur)

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

var time = new Date();
// console.log(formatDate(time.setDate(time.getDate()-1)))


let a = 10
let b

if (!b) {
  a = 20
}

console.log(a)