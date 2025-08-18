import "../css/Auth.css";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  return (
    <>
      <div className="auth">
        <h3 className="auth-header">Giriş Yap / Kaydol</h3>
        <div className="auth-input">
          <input
            className="input-email"
            type="text"
            placeholder="Email giriniz..."
          />
          <input
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
          <button className="button-register">Kaydol</button>
        </div>
      </div>
    </>
  );
};

export default Auth;
