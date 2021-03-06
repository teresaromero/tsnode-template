import express from 'express'
import { Logger } from './Logger'

const app = express()
const logger = Logger.getInstance()
app.listen(3000, () => {
  logger.info('Server running')
})
