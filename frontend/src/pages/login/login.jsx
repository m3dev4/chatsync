import React, { useState } from "react";
import { Link } from "react-router-dom";
import useConnection from "../../hooks/useConnecter";

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const {loading, login} = useConnection()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(userName, password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
        backdrop-filter backdrop-blur-lg bg-opacity"
      >
        <h1 className="text-3xl font-semibold  text-center text-gray-300">
          Login <span className="text-blue-500">ChatSync</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Nom utilisateur"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover-underline hover:text-blue-600 m-2 inline-block"
          >
            {"Je n'ai"} pas de compte?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Se connecter" }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
