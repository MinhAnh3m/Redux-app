import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const DEFAULT_USER = {
  username: "tranh123",
  password: 12345,
};
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleOnChangeForm = (name, value) => {
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    if (
      user.username === DEFAULT_USER.username &&
      user.password.toString() === DEFAULT_USER.password.toString()
    ) {
      navigate("/home");
    } else {
      alert("username or password incorrect!");
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className=" space-y-3">
        <div className="flex flex-col items-center text-2xl ">
          <h1 className="font-sans underline decoration-indigo-500 ">LOGIN</h1>
        </div>

        <p className="text-lg font-mono"> USERNAME </p>
        <input
          type="text"
          className="h-8 px-4 rounded-full"
          onChange={(e) => handleOnChangeForm("username", e.target.value)}
        ></input>

        <p className="text-lg font-mono"> PASSWORD </p>
        <input
          type="password"
          className="h-8 px-4 rounded-full"
          onChange={(e) => handleOnChangeForm("password", e.target.value)}
        ></input>

        <div className="flex  justify-center">
          <button
            className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"
            type="submit"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
