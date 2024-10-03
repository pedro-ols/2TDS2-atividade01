import { Router } from "express";

const candidatosRoutes = Router();

let candidatos = [
    {
        id: Math.random() * 1000000,
        nome: "Capitã Lucimara fake",
        partido: "PSD",
        idade: 42,
        segundoMandato: true, //concorrente ao segundo mandato
        propostas: [
            "Aumento do salário mínimo", "Redução de impostos", "Mais investimentos"
        ], 
    },
];

//Rota para buscar todas as emoções;
candidatosRoutes.get("/", (req, res) => {
    return res.status(200).send(candidatos);
});

//Rota para criar uma nova Candidato
candidatosRoutes.post("/", (req, res) => {
    const { nome, partido, idade, segundoMandato, propostas } = req.body;

    const novoCandidato = {
    };
    candidatos.push(novoCandidato);

    return res.status(200).send(candidatos);
});

//rota para buscar um Candidato por seu ID
candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    //console.log(id);
    const candidato = candidatos.find((candidato) => candidato.id == id);
    if (!candidato) {
        return res.status(404).send({
            message: "Candidato não encontrado",
        });
    };

    return res.status(200).send({
        message: "Candidato encontrado",
        candidato,
    });
});

candidatosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const candidato = candidatos.find((emotion) => emotion.id == id);
    if (!candidato) {
        return res.status(404).send({
            message: "Candidato não encontrado",
        });
    };
    const { nome, partido, idade, segundoMandato, propostas } = req.body;
    candidato.nome = nome;
    candidato.cor = cor;

    return res.status(200).send({
        message: "Candidato atualizada!", candidato,
    });
});

candidatosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    const candidato = candidatos.find((emotion) => emotion.id == id);
    if (!candidato) {
        return res.status(404).send({
            message: "Candidato não encontrado",
        });
    };

    candidatos = candidatos.filter((emotion) => emotion.id != id);

    return res.status(200).send({
        message: "Candidato deletada.", candidato,
    });
});

export default candidatosRoutes;