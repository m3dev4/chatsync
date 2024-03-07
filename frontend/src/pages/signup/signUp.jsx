import React from "react";
import GenderCheckBox from "../../components/genderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 MX6AUTO">
      <div
        className="w-full p-6 rounded-lg shadow-md
         bg-gray-400 bg-clip-padding backdrop-filter *:backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold  text-center text-gray-300">
          S'incrire <span className="bg-gradient-to-r from-gray-200 via-slate-50 to-neutral-100 bg-clip-text text-transparent font-extrabold">ChatSync</span>
        </h1>
        <form>
          <div>
            <label className="label">
              <span className="text-base label-text">Votre Nom</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
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
            />
          </div>

          <GenderCheckBox />

          <a
            href="#"
            className="text-sm hover:undeline hover:text-blue-600 mt-2 inline-block"
          >
            Déjà un compte ? Connectez-vous !
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
