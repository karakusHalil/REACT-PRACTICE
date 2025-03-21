import { useContext } from "react";
import TopAbout from "../components/About/TopAbout";
import { UserContext } from "../contexts/UserContext";

function About() {
  const { users } = useContext(UserContext);
  return (
    <>
      <div className="row">
        <TopAbout />
        <article>
          <h2>About Page Section</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius,
            doloribus laboriosam autem quis porro.
          </p>
          <p>
            Obcaecati eum saepe minima adipisci, ipsa atque harum exercitationem
            enim rem tenetur hic rerum aliquam?
          </p>
          <p>
            Impedit corrupti veniam ut nostrum quo. Aliquam ex ratione eaque
            laudantium, deleniti provident saepe neque?
          </p>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.firstname} {user.lastname.toUpperCase()}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}

export default About;
