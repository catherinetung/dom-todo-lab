const inp =  document.querySelector('input')
const btn = document.querySelector('button')
const list = document.querySelector('ul')

btn.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  const inp = document.querySelector('input')
  newLi.textContent = inp.value
  if (inp.value !== "") {
    document.querySelector('ul').appendChild(newLi)
    inp.value = ""
  }
})

const rst = document.getElementById('reset')
rst.addEventListener('click', function(evt2){
  const oldList = document.querySelectorAll('li');
  oldList.forEach(todo => todo.remove())
  const inp2 = document.querySelector('input')
  inp2.value = ""
})

const rmItem = document.querySelector('ul')
rmItem.addEventListener('click', function(evt3){
  const rmLi = evt3.target
  //when you console log evt3.target, clicking on the individual list item works to isolate li
  rmLi.remove()
})
