import { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, firstname: "Hüseyin", lastname: "Çiçek" },
    { id: 2, firstname: "Betül", lastname: "Ak" },
    { id: 3, firstname: "Bilal", lastname: "Han" },
    { id: 4, firstname: "Efe Can", lastname: "Dem" },
    { id: 5, firstname: "Halil İbrahim", lastname: "Kara" },
    { id: 6, firstname: "Hatice Kübra", lastname: "Tos" },
    { id: 7, firstname: "Mehmet", lastname: "Ala" },
    { id: 8, firstname: "Mehmet Fatih", lastname: "Bez" },
    { id: 9, firstname: "Melih", lastname: "Güneş" },
    { id: 10, firstname: "Mutlu", lastname: "Fırtına" },
    { id: 11, firstname: "Orçun", lastname: "Gök" },
    { id: 12, firstname: "Simay", lastname: "Seymen" },
  ]);

  const userValues = {
    users,
    setUsers,
  };

  return (
    <>
      <UserContext.Provider value={userValues}>{children}</UserContext.Provider>
    </>
  );
}

export { UserContextProvider, UserContext };
