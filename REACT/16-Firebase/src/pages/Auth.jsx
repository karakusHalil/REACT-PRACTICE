import { useState } from "react";
import "../css/Auth.css";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth, provider } from "../Firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("Kullanıcı oluşturuldu");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        toast.success("Başarıyla giriş yapıldı");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const loginGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      //   const credential = GoogleAuthProvider.credentialFromResult(response);
      //   const token = credential.accessToken;
      const user = response.user;
      if (user) {
        toast.success("Başarıyla giriş yapıldı");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="auth">
        <h3 className="auth-header">Giriş Yap / Kaydol</h3>
        <div className="auth-input">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-email"
            type="text"
            placeholder="Email giriniz..."
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-password"
            type="password"
            placeholder="Şifre giriniz..."
          />
        </div>
        <div className="auth-button">
          <button className="button-google" onClick={loginGoogle}>
            <FaGoogle />
            Google ile giriş
          </button>
          <button onClick={login} className="button-login">
            Giriş Yap
          </button>
          <button onClick={register} className="button-register">
            Kaydol
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
