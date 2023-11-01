const express = require("express");
const colors = express.Router();
const { getAllColors, getColor, createColor } = require("../queries/color.js");
const { checkName, checkBoolean } = require("../validations/checkColors.js")

colors.get("/", async (req, res) => {
  const allColors = await getAllColors();
  if (allColors[0]) {
    res.status(200).json(allColors);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

colors.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneColor = await getColor(id);
  if (oneColor) {
    res.json(oneColor);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

colors.post("/", checkName, checkBoolean, async (req, res) => {
  const color = await createColor(req.body);
  res.status(200).json(color);
});

module.exports = colors;