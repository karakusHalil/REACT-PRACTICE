import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function TopAbout() {
  const { users } = useContext(UserContext);

  return (
    <>
      <article style={{marginBottom : "20px"}}>
        <h2>Top About Component Section</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          voluptatibus laboriosam magnam sapiente mollitia nostrum!
        </p>
        <p>
          Accusantium ad fugiat obcaecati, error minima ducimus adipisci cumque
          odit veniam. Labore accusamus illum delectus.
        </p>
        <p>
          Alias et cum velit, eum consequuntur soluta magni fugit quaerat
          architecto cumque explicabo excepturi iusto?
        </p>
        <ul className="list-group">
          {users.map((user) => (
            <li className="list-group-item" key={user.id}>
              {user.id} - {user.firstname} {user.lastname.toUpperCase()}
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

export default TopAbout;
