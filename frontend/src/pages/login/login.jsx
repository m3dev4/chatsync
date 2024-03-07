import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
        backdrop-filter backdrop-blur-lg bg-opacity"
      >
        <h1 className="text-3xl font-semibold  text-center text-gray-300">
          Login <span className="text-blue-500">ChatSync</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Nom utilisateur"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base text-label">Mot de passe</span>
            </label>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover-underline hover:text-blue-600 m-2 inline-block"
          >
            {"Je n'ai"} pas de compte?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
