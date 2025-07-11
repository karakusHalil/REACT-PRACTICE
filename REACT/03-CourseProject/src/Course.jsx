import "./css/Course.css";

const Course = ({ course }) => {
  const { id, title, description, price, link, image } = course;
  return (
    <>
      <div className="course">
        <img className="img" src={image} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
        <h3>{price}TL</h3>
        <a href={link}>Kurs Linki!</a>
      </div>
    </>
  );
};

export default Course;
