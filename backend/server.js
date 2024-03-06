import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";  

import authRoute from "./routes/auth.routes.js";
import message from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"

import conectToMongoDb from "./database/connectToMongoDb.js";

dotenv.config(); // permet d'utiliser les variables d'environnement dans le fichier .env

const app = express();
const port = 5000;

app.use(express.json()); // permet de parser les requetes en JSON
app.use(cookieParser()); // permet de parser les cookies de la requete HTTP

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoute);
app.use("/api/messages", message);
app.use("/api/users", userRoutes)

app.listen(port, () => {
  conectToMongoDb();
  console.log(`le serveur est démarrer sur le port ${port}`);
});
