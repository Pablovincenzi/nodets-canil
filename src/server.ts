import express  from 'express';
import dotenv from 'dotenv'
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'



dotenv.config()

const server = express();

server.set('view engine', 'mustache');
server.set('views',path.join(__dirname,'views'))
server.set('mustache',mustache());

server.use(express.static(path.join(__dirname,'../public')))

server.use(mainRoutes);

server.use((req,res)=>{
    res.send('pagina nao encontrada')
})
// Rotas

server.listen(process.env.PORT)