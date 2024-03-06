import mongoose from "mongoose";

const conectToMongoDb = async () => {
  const uri =
    "mongodb+srv://wikat28098:Osph1WggeRIcHPCk@whatclone.iubpk1z.mongodb.net/?retryWrites=true&w=majority&appName=whatclone";
  try {
    await mongoose.connect(uri);
    console.log("Connection avec la base de données rétablie avec succés");
  } catch (error) {
    console.log("Erreur de connection du base de données", error);
  }
};
export default conectToMongoDb;
