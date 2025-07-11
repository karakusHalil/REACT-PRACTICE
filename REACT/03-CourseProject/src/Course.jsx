import "./css/Course.css";

const Course = ({ course }) => {
  const { id, title, description, price, link, image } = course;
  return (
    <>
      <div className="course">
        <div>
          <img src={image} alt={title} />
          <h4>{title}</h4>
          <h5>{description}</h5>
          <h3>{price}</h3>
          <a href={link}>Kurs Linki!</a>
        </div>
      </div>
    </>
  );
};

export default Course;
