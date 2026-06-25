const express = require("express");
const mongoose = require("mongoose");

const insuranceRoutes = require("./insurance routes");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/insuranceDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/insurance", insuranceRoutes);

app.get("/", (req, res) => {
  res.send("Insurance Management System API Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});