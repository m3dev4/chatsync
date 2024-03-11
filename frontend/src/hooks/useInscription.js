import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const signup = async (fullName, username, password, confirmPassword, gender) => {
    const success = handleInputsErrors({ fullName, username, password, confirmPassword, gender });
    if (!success) return;
    
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
      });

      const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputsErrors({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Veuillez remplir tous les champs.");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Les mots de passe ne correspondent pas.");
    return false;
  }
  if (password.length < 6) {
    toast.error("Le mot de passe doit comporter au moins 6 caractères");
    return false;
  }

  return true;
}
