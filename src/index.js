const requireAll = context => context.keys().map(context)
requireAll(require.asyncImport('./modules', true, /\.js$/, 'lazy', '$aaa$')).forEach(async v => {
  const md = await v
  const el = document.createElement('div')
  el.innerHTML = md.default.words
  document.body.appendChild(el)
})

// const requireAll = context => context.keys().map(context)
// requireAll(require.context('./modules', true, /\.js$/, 'lazy')).then(async v => {
//   const md = await v
//   const el = document.createElement('div')
//   el.innerHTML = md.default.words
//   document.body.appendChild(el)
// })

// const a = import(/* webpackChunkName: "aaa" */ './modules/1')
