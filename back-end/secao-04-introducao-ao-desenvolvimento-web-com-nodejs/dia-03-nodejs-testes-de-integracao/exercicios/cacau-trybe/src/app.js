const express = require("express");

const {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  writeCacauTrybeFile,
} = require("./cacauTrybe");

const app = express();

app.use(express.json());

app.get("/chocolates", async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get("/chocolates/search", async (req, res) => {
  const { name } = req.query;
  const chocolates = await getAllChocolates();
  const filteredChocolates = chocolates.filter((chocolate) =>
    chocolate.name.includes(name)
  );
  if (!filteredChocolates.length)
    return res.status(404).json(filteredChocolates);
  res.status(200).json(filteredChocolates);
});

app.get("/chocolates/total", async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const chocolate = await getChocolateById(Number(id));
  if (!chocolate)
    return res.status(404).json({ message: "Chocolate not found" });
  res.status(200).json({ chocolate });
});

app.get("/chocolates/brand/:brandId", async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolates = await getAllChocolates();
  const chocolateIdx = chocolates.findIndex(
    (chocolate) => chocolate.id === +id
  );
  if (chocolateIdx === -1)
    return res.status(404).json({ message: "Chocolate not found" });
  chocolates[chocolateIdx].name = name;
  chocolates[chocolateIdx].brandId = brandId;
  await writeCacauTrybeFile(chocolates);
  res.status(200).json({ chocolate: chocolates[chocolateIdx] });
});

module.exports = app;
