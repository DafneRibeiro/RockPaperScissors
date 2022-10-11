import express from 'express';
import indexRouter from './routes/index.js';
import gameRouter from './routes/game.js';
import resultsRouter from './routes/results.js';


const app = express()
const port = 4000
const host = 'localhost'
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


const SERVERPORT = port;
const SERVERHOST = host

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/results', resultsRouter);

app.listen(port, host, () => {
    console.log(`Server is running at http://${SERVERHOST}:${SERVERPORT}`)
});

export default app; 


