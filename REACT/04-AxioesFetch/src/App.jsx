import { useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updateUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updateUser);
  };

  const deleteUserById = async (userId) => {
    await axios.delete(`${BASE_URL}/users/${userId}`);
  };

  const getUserById2 = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  };

  const getPostById = async (postId) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    return response.data;
  };

  const getPost = async () => {
    const postId = await getUserById2(1);
    const postData = await getPostById(postId);
    console.log(postData);
  };

  useEffect(() => {
    getPost();
    // getAllUsers();
    // getUserById(2);
    // const newUser = {
    //   username: "bilal",
    //   password: "3636",
    // };
    // createUser(newUser);
    // updateUser("8cce", {
    //   username: "necip",
    //   password: "5555",
    // });
    // deleteUserById("cd6c");
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
