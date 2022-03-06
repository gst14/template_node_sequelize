import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "[GET] Esta es la raiz 📖 " + localtime() });
});
router.post("/", (req, res) => {
  res.json({ msg: "[POST] Esta es la raiz 📬" + localtime() });
});
router.patch("/", (req, res) => {
  res.json({ msg: "[PATCH] Esta es la raiz 🔁" + localtime() });
});
router.delete("/", (req, res) => {
  res.json({ msg: "[DELETE] Esta es la raiz 💥" + localtime() });
});

export { router };
