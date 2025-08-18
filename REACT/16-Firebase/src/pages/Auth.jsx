import { useState } from "react";
import "../css/Auth.css";
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <button className="button-google">
            <FaGoogle />
            Google ile GİRİŞ
          </button>
          <button className="button-login">Giriş Yap</button>
          <button onClick={register} className="button-register">
            Kaydol
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
