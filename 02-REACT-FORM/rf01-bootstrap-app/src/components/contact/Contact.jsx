import ContactForm from "./ContactForm";
import { useState } from "react";
// import Form1 from "./Form1";

const Contact = () => {
  const [firstname, setFirstName] = useState("İsim");
  const [lastname, setLastName] = useState("Soyisim");
  return (
    <>
      <div className="row justify-content-center py-4">
        {/* <Form1/> */}
        <h1>{firstname} {lastname}</h1>
        <ContactForm setFirstName={setFirstName} setLastName={setLastName}/>
      </div>
    </>
  );
};

export default Contact;
