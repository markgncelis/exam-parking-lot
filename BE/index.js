import express from 'express'
const app = express()
const port = 5678
import { myParkingSlots } from './data/myParkingSlots.js'
import { myParkingMap } from './data/myParkingMap.js'
import bodyParser from 'body-parser'
import { myEntryPoints } from './data/myEntryPoints.js'

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.json({ 'msg': 'home' })
})
app.get('/api/slots', (req, res) => {
  res.json(myParkingSlots)
})

app.get('/api/maps', (req, res) => {
  res.json(myParkingMap)
})

app.get('/api/entryPoints', (req, res) => {
  res.json(myEntryPoints)
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})