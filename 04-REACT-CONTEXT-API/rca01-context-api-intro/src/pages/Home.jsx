import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import TopSection from "../components/Home/TopSection";

function Home() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="row">
        <TopSection />
        <article>
          <h2>Home Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            incidunt. Deleniti provident ex, incidunt tempore architecto rem
            cupiditate reprehenderit explicabo autem commodi? Ipsa aliquam
            officia quos autem cumque commodi nobis ratione, molestias, ex
            quidem et.
          </p>
          <p>
            Accusamus aperiam, minus voluptate obcaecati quod minima in
            praesentium amet impedit tempora recusandae aliquid quas soluta
            placeat voluptas quidem nisi iusto quos quaerat porro. Cumque
            impedit quibusdam sed vero. Officia voluptates sapiente maxime
            tenetur. Sequi?
          </p>
          <p>
            Provident repellendus ut, officia autem vero nulla, similique
            aspernatur, quia perspiciatis iste laboriosam culpa eum! Saepe
            accusantium optio illum exercitationem ad officiis, iusto incidunt
            nobis dignissimos! Natus magni eum ad inventore illo beatae, nulla
            eligendi.
          </p>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}

export default Home;
