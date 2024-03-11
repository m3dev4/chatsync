import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    console.log("Received form data:", { fullName, username, password, confirmPassword, gender }); // Ajouter ce log

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Mot de passe ne coresspond pas" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ error: "Ce nom d'utilisateur existe déjà" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashpassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenandSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        fullName: newUser.fullName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Donnée invalide" });
    }
  } catch (error) {
    console.log("Error in signup:", error); // Ajouter ce log
    res.status(500).json({
      error: "internal error MESSAGE",
    });
  }
};


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res
        .status(400)
        .json({ error: "l'utilisateur ou le mot de passe est incorrect" });
    }
    generateTokenandSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json({
      error: "internal error MESSAGE",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Déconnection reussi" });
  } catch (error) {
    res.status(500).json({
      error: "internal error MESSAGE",
    });
  }
};
