import express from "express";
import * as livroController from "../controllers/livroController.js";

const router = express.Router();

router.get("/", livroController.listar);
router.get("/novo", livroController.formNovo);
router.post("/novo", livroController.criar);
router.get("/status/:indice", livroController.alterarStatus);
router.get("/remover/:indice", livroController.remover);

export default router;
