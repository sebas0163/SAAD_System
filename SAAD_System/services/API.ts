//Obtener pulsaciones por minuto
//Oxigenación en sangre por minuto 

// se obtiene el promedio

//Aqui solo se hace el análisis.

// esto solo es para comunicación
import express from 'express';

import bodyParser from 'body-parser';

const app = express();
const port =3000;

app.use(bodyParser.json());

app.post('/endpoint', (req, res)=>{
    const {peso, edad, altura} = req.body;

    console.log(`Peso: ${peso}, Edad: ${edad}, Altura: ${altura}`);
    res.status(200).send({message:"Recibido"});
});

app.listen(port,()=>{
    console.log(`API escuchando en http://localhost:${port}`);
})
