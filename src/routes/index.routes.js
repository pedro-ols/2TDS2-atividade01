import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).json({ message: "Tyrion" })
});

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
});

export default routes;