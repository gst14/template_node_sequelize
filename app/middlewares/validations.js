const greatting = (req, res, next) => {
  if (req.body.hey && req.body.hey.toLowerCase().includes("hello"))
    return next();
  res.json({ resp: "You didn't say hello ๐" });
};

const giveMeYourName = (req, res, next) => {
  if (req.body.name) return next();
  res.json({ resp: "Tell me your name ๐คจ" });
};

export { greatting, giveMeYourName };
