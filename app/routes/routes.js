import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ msg: `[GET] Hey ${req.body.name}! 🥰` });
});
router.post("/", (req, res) => {
    res.json({ msg: `[POST] Hey ${req.body.name}! 🥰` });
});
router.patch("/", (req, res) => {
    res.json({ msg: `[PATCH] Hey ${req.body.name}! 🥰` });
});
router.delete("/", (req, res) => {
    res.json({ msg: `[DELETE] Hey ${req.body.name}! 🥰` });
});

export { router };
