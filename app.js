import express from 'express'
import cors from "cors";
import bodyParser from "body-parser";

//Routes
import Users from './routes/users.js'
import Dares from './routes/dares.js'

//
const app = express()
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to SMILE GAME')
    }
)

app.use('/smile_game/users', Users);
app.use('/smile_game/dares', Dares);


export default app