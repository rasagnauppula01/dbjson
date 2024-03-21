<<<<<<< HEAD
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
=======
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
>>>>>>> 460e78d69bb6cbedd87fa8db349da3a4ea3b80af
})