const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");
const uri = "mongodb+srv://mnmalikdev:Islamabad422%23@cluster0.z1vt6.mongodb.net/VacayHub?retryWrites=true&w=majority";
const authRouter = require("./routes/AuthRoutes");
app.use(express.json());

app.use(cookieSession({ name: "session", keys: ["Nabeel'sSecretKey"], maxAge: 1000 * 60 * 60 * 24 * 14 }));

// NOTE CHANGE PORT NUMBER LATER.
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use("/auth", authRouter);

mongoose.connection.on("connected", () => {
  console.log("DB connection successful");
});

mongoose.connection.on("error", (error) => {
  console.error("OOPS SOMETHING WENT WRONG", error);
});
mongoose.connect(uri);
app.listen(5000, () => {
  console.log("VACAUHUB server up and running on port 5000");
});

app.get("/", (req, res) => {
  res.redirect("http://localhost:3000/");
});
