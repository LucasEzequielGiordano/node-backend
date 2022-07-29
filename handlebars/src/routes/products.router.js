import { Router } from "express";
import ProductManager from "../managers/productManager.js";
import { uploder } from "../utils.js";

const router = Router();
const productService = new ProductManager();

router.post("/", uploder.single("img"), async (req, res) => {
  const { name, price } = req.body;

  if (!req.file)
    return res
      .status(500)
      .send({ status: "error", error: "couldn't upload file" });
  if (!name || !price)
    return res
      .status(400)
      .send({ status: "error", error: "Incomplete values" });
  let product = {
    name,
    price,
    img: req.file.filename,
  };
  await productService.save(product);
  res.send({ status: "success", message: "Product added" });
});

export default router;
