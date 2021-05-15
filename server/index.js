const express = require('express')
const consola = require('consola')
// dùng bodyParser để parse data
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const fs = require("fs")
const path=require("path")
const filePath = "../store/initial_data.json"
const initialData = require(filePath)
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(bodyParser.json())

  app.get('/api/posts',(req,res)=>{
    return res.json({"check":"using get method"})
  })
  app.post('/api/posts',(req,res)=>{
    const post= req.body
    initialData.myposts.push(post)

    fs.writeFile(path.join(__dirname, filePath),JSON.stringify(initialData,null,2),err=>{
      if(err){
        return res.status(422).send(err)
      }
      console.log("Sending data to client")
      return res.json("File sucessfully updated")
    })
  })
  app.patch('/api/posts/:id',(req,res)=>{
    console.log('Id',req.params.id)
    return res.json({"check":"using patch method"})
  })
  app.delete('/api/posts/:slug',(req,res)=>{
    console.log('Slug',req.params.slug)
    return res.json({"check":"using delete method"})
  })
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
