const setClassesInBodyElement = () => {
  document.body.classList.add('min-h-screen', 'flex', 'flex-col')
}

setClassesInBodyElement()

const getOrCreateMainElement = () => {
  let main = document.getElementById('main')
  if (!main) {
    main = document.createElement('main')
    main.id = 'main'
    document.body.insertBefore(main, document.body.lastElementChild)
  }
  return main
}

export default getOrCreateMainElement
