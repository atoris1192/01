import express from 'express'
import bodyParser from 'body-parser'


const app =  express();
const port = 3001
const url = '/api/characters'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, err => {
  if (err) console.error(new Error(err))
  else console.log(`listening on port ${port}`)
})

app.post(url, (request, response)=> {
  response.status(200).send(request.body)
})
