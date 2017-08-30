import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Character from './Character'
const app =  express();
const port = 3001
const url = '/api/characters'
const dbUrl = 'mongodb://localhost/crud'

mongoose.connect(dbUrl, err => {
  if (err) console.error(new Error(err))
  else console.log('connected db')

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.listen(port, err => {
    if (err) console.error(new Error(err))
    else console.log(`listening on port ${port}`)
  })

  app.post(url, (request, response)=> {
    const { name, age } = request.body
    console.log(request.body)
    Character({
      name: name,
      age: age,
    }).save( err => {
      if (err) response.status(500).send(err)
      else response.status(200).send(`${name}: ${age} db created!!!`)
    })
    // response.status(200).send(request.body)
  })

  app.get(url, (request, response)=> {
    Character.find({}, (err, characterArray) => {
      if (err) response.status(500).send(err)
      else response.status(200).send(characterArray)
    })
  })

  app.put(url, (request, response)=> {
    const { id } = request.body
    Character.findByIdAndUpdate(id, {$inc: {age: 1}}, err => {
      if(err) response.status(500).send(err)
      else {
        Character.find({}, (err, characterArray)=> {
          if (err) response.status(500).send(err)
          else response.status(200).send(characterArray)
        })
      }
    })
  })

  app.delete(url, (req, res)=> {
    const { id } = req.body
    Character.findByIdAndRemove(id, (err)=> {
      if (err) res.status(500).send(err)
      else {
        Character.find({}, (err, characterArray)=> {
          if(err) res.status(500).send(err)
          else res.status(200).send(characterArray)
        })
      }
    })
  })
})
