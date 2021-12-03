require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();


// Middleware
app.use(cors());
app.use(express.json()); // parse json bodies in the request object



// Redirect requests to endpoint starting with /studendts to studentRoutes.js
app.use("/students", studentRoutes);

// Mongo db Database connection
mongoose.connect("mongodb://localhost/users")
    .then(() => console.log("Successful database Connection"))
    .catch((err) => console.log(err));
// Redirect requests to endpoint starting with /users to users.js
app.use("/users",userRoutes);

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);
  res.status(500).json({
    message: "Something went really wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
