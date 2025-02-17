function Card() {
  return (
    <>
      <div className="card" style={{width: "33%", marginBottom: "5px"}}>
        <img src="https://picsum.photos/300/200?random=1" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sint?
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
