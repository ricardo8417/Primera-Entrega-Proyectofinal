import { Router } from "express";

const router = Router();

router.get("/Ricardo", (req, res) => {
  res.send("Saludo de Routers Cart, de Ricardo");
});

router.get("/", (req, res) => {
  res.send("Saludo desde Carts");
});

export default router;
