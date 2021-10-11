// import express from "express";
import { cicloDaVida } from "./CicloDaVida";
class Main {
    public Run(): void {
        cicloDaVida.Genesis();
    }
}

new Main().Run();

// const main = express();
// main.get('/main', (req: any, res:any) => { 
//     cicloDaVida.Genesis();   
//     res.status(200).send('Programa Ciclo da Vida foi iniciado.');
// });

// main.listen(5000, () => {
//     console.log('Main is running at http://localhost:5000/main');
// });

