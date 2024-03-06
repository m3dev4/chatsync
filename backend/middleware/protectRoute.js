import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  const jwtSecret = "gXS8DWEPJBqTclf4XWor4Dc4fqp9Z4jkwt8MXQ3RnlA=";
  try {
    const token = req.cookies.jwt; // Accédez au cookie JWT correctement
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, jwtSecret);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "Aucun utilisateur n'est trouvé" });
    }
    req.user = user;

    next();
  } catch (error) {
    console.log("Erreur au niveau du middleware:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
