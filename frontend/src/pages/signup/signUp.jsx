import React, { useState } from "react";
import GenderCheckBox from "../../components/genderCheckBox";
import { Link } from "react-router-dom";
import useInscription from "../../hooks/useInscription";




const SignUp =  () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useInscription(); // Changement de "useSignUp" à "useSignup"

  const checkboxGenderChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs.fullName, inputs.username, inputs.password, inputs.confirmPassword, inputs.gender);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 ">
      <div
        className="w-full p-6 rounded-lg shadow-md
         bg-gray-400 bg-clip-padding backdrop-filter *:backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold  text-center text-gray-300">
          S'incrire <span className="bg-gradient-to-r from-gray-200 via-slate-50 to-neutral-100 bg-clip-text text-transparent font-extrabold">ChatSync</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base label-text">Votre Nom</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Nom utilisateur</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Mot de passe</span>
            </label>
            <input
              type="password"
              placeholder="Entrer votre mot de passe"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">
                Confirme le mot de passe
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirmer votre mot de passe"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckBox  onCheckboxChange={checkboxGenderChange} selectGender={inputs.gender} />

          <Link
            to={"/login"}
            className="text-sm hover:undeline hover:text-blue-600 mt-2 inline-block"
          >
            Déjà un compte ? Connectez-vous !
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
              {loading? <span className="loading loading-spinner"></span> : "S'inscrire"  }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
