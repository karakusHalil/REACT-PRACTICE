import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser(userCredential.email);
      }
    });
  }, []);
  return (
    <>
      <div style={{ margin: "10px", fontSize: "20px" }}>Merhaba {user}</div>
    </>
  );
};

export default Home;
