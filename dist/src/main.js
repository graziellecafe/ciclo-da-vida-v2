"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express";
const CicloDaVida_1 = require("./CicloDaVida");
// const main = express();
// main.get('/main', (req: any, res:any) => { 
//     cicloDaVida.Genesis();   
//     res.status(200).send('Programa Ciclo da Vida foi iniciado.');
// });
// main.listen(5000, () => {
//     console.log('Main is running at http://localhost:5000/main');
// });
class Main {
    Run() {
        CicloDaVida_1.cicloDaVida.Genesis();
    }
}
new Main().Run();
//# sourceMappingURL=main.js.map