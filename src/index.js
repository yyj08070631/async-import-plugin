console.log(1)

require.asyncImport(
  './modules',
  true,
  /\.js$/,
  'lazy'
).forEach(async v => {
  const md = await v
  const el = document.createElement('div')
  el.innerHTML = md.default.words
  document.body.appendChild(el)
})

console.log(2)
