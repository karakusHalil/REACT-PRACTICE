function UserList() {
  const users = [
    "Arda",
    "Gomez",
    "Sosa",
    "Olcay",
    "Quaresma",
    "Atiba",
    "Necip",
    "Marcelo",
    "Pepe",
  ];
  return (
    <>
      <h2 style={{ backgroundColor: "gray", color: "green" }}>User List</h2>
      <ul style={{ listStyleType: "none" }}>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
