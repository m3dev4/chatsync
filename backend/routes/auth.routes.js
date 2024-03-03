// EXPLICATIONS:
// Importation du module express
// Création d'un routeur avec la méthode Router()
// Création d'une route GET pour la page signup, qui renvoie une réponse avec le texte "Signup Route". 
// Création d'une route GET pour la page login, qui renvoie une réponse avec le texte "Login Route".
// Création d'une route GET pour la page logout, qui renvoie une réponse avec le texte "Logout Route".



import express from "express"
import { login, logout, signup } from "../controller/auth.controller.js";


const router = express.Router();

router.post('/signup', signup)

router.post('/login', login)

router.post('/logout', logout)

export default router