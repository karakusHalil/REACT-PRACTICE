import { signOut } from "firebase/auth";
import "../css/Navbar.css";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Çıkış yapıldı");
      navigate("/auth");
    } catch (error) {
      toast.error("Çıkış yapılamadı !");
    }
  };
  return (
    <>
      <div className="navbar">
        <div onClick={() => navigate("/")} className="navbar-left">
          FİREBASE
        </div>
        <div onClick={logout} className="navbar-right">
          <button className="loggingOut">Çıkış yap</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
