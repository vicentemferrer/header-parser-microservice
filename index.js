import express from 'express'
import cors from 'cors'

import { buildHome } from './controllers/main.controller.js'
import staticRoute from './routes/static.js'
import apiRoute from './routes/api.route.js'

const app = express()

const { PORT, HOST } = process.env

app.use(cors({ optionsSuccessStatus: 200 }))

app.use(staticRoute)

app.get('/', buildHome)
app.use('/api', apiRoute)

app.listen(PORT || 4321, () => {
  console.log(`Your app is listening on http://${HOST}:${PORT}`)
})
