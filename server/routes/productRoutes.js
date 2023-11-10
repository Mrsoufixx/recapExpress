const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductByProperty,
  getProductByModelRegex,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.get("/propSearch", getProductByProperty);
router.get("/one", getProductByModelRegex);
// Add other routes and their corresponding controller methods

router.post("/", addProduct);
router.put("/", updateProduct);
router.delete("/", deleteProduct);

module.exports = router;
