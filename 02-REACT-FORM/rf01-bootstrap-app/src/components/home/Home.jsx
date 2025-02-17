import Content from "./Content";
import LeftSideBar from "./LeftSideBar";

function Home() {
  return (
    <>
      <div className="row bg-primary">
        <LeftSideBar />
        <Content />
      </div>
    </>
  );
}

export default Home;
