import express from 'express'
import SelecaoController from './app/controllers/selecaoController.js'

const app = express()
app.use(express.json())

app.post('/', SelecaoController.insert)

app.get('/',SelecaoController.list)

app.delete('/:id',SelecaoController.delete)

app.put('/:id', SelecaoController.update)

app.get('/:id',SelecaoController.listId)

export default app