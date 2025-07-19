import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/userSlice";

const UserList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.users);
  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      {users &&
        users.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3>Name :{user.name}</h3>
              <h3>Username :{user.username}</h3>
              <h5>City :{user.address.city}</h5>
            </div>
          );
        })}
    </>
  );
};

export default UserList;
