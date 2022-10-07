import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DesignLogin from "../../assets/svgs/DesignLogin";
import Button from "../../components/general/Button";
import TextField from "../../components/general/Textfield";
import axios from "axios";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("user_role", response.data.data.user_role);
      localStorage.setItem("token", response.data.data.Token);
      console.log(response);
      switch (response.data.data.user_role) {
        case 2:
          navigate("/agent");
          break;
        case 3:
          navigate("/");
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen flex-row flex-wrap-reverse justify-center bg-BGSecondary">
      <div className="mx-auto flex flex-col justify-center">
        <h1 className="mb-2 pb-3 text-3xl font-bold text-TextTertiary">
          Log In
        </h1>

        <p className="mb-4 flex gap-x-3 text-sm text-TextTertiary">
          Not Registered?
          <a
            onClick={() => navigate("/Login")}
            className="text-BtnPrimary-start hover:underline"
          >
            Sign Up
          </a>
        </p>
        <div className="flex w-auto flex-col gap-y-3 md:w-96 ">
          <TextField
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            type="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex flex-wrap gap-x-4  gap-y-3">
            <input type="checkbox" />
            <label className="text-sm "> Remember Me</label>
            <div className="flex flex-row gap-x-12 gap-y-3">
              <a className="text-sm text-BtnPrimary-start hover:underline ">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="mt-7 text-sm">
            <Button text="Log In" onClick={handleLogin} />
          </div>
        </div>
      </div>
      <div className="hidden w-6/12 items-center  justify-center lg:flex">
        <DesignLogin />
      </div>
    </div>
  );
}
