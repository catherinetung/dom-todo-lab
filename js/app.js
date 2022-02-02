const inp =  document.querySelector('input')
const btn = document.querySelector('button')
const list = document.querySelector('ul')

btn.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  const inp = document.querySelector('input')
  newLi.textContent = inp.value
  const rst = document.getElementById('reset')
  rst.addEventListener('click', function(evt2){
    document.getElementById('todo-list').removeChild(newLi)
    input.value = ""
  })
  
  if (inp.value !== "") {
    document.querySelector('ul').appendChild(newLi)
    inp.value = ""
  }
})

