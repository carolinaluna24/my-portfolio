const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

// Ruta para recibir mensajes de contacto
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Mensaje guardado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el mensaje" });
  }
});

module.exports = router;
