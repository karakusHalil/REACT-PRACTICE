import LeftSideBarMenu from "./LeftSideBarMenu"

function LeftSideBar() {
  return (
    <>
      <div className="col-3 bg-success p-3">
        Left Side Bar
        <LeftSideBarMenu />
      </div>
    </>
  );
}

export default LeftSideBar;
