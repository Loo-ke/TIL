// document.body.children[2].children[0].href='https://www.google.com'
  // let anchor = document.getElementById('anchor')

  // anchor.href='hhtps://google.com'
  // let anchor2 = document.querySelector('#anchor')

  // let h1 = document.body.firstElementChild
  // console.log(h1)

  // let parent = h1.parentElement
  // console.log(parent)

  // let children2 = parent.children[1]

  // console.log(children2)

  // let h1Id = document.getElementById('h1')
  // console.log(h1Id)

  // let pId = document.querySelector("#p")
  // console.log(pId)
  // pId.textContent = 'hihhihihi'

let anchor = document.createElement('a')
anchor.href = 'https://google.com'
anchor.textContent = 'to GOOGLE'

let first = document.querySelector('p')

first.appendChild(anchor)