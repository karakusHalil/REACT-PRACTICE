import { useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
