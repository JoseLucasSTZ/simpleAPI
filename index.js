//imports

import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

//definições
const app = express();
const PORT = 3000
app.use(bodyParser.json())


//rotas
app.use('/users', usersRoutes)

//requisições
app.get('/', (req, res) => {res.send('hello from homepage')
})


//porta
app.listen(PORT, console.log(`Server running on port http://localhost:${PORT}`))

17