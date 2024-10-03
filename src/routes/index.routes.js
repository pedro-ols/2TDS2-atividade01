import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).json({ message: "Tyrion" })
});

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
});

routes.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
});

routes.use("/emocoes", emocoesRoutes);
routes.use("/personagens", personagensRoutes);

export default routes;