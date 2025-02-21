import PropTypes from "prop-types";
// import { useState } from "react";

function ContactForm(props) {
  const person = { firstname: "", lastname: "" };
  function handleSubmit(e) {
    e.preventDefault();
    props.setFirstName(person.firstname);
    props.setLastName(person.lastname);
  }

  function setPersonFirstName(e) {
    person.firstname = e.target.value;
  }
  function setPersonLastName(e) {
    person.lastname = e.target.value;
  }

  // function handleFirstNameOnChange(e){
  //     props.setFirstName(e.target.value);
  // }
  // function handleLastNameOnChange(e){
  //     props.setLastName(e.target.value);
  // }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row py-4">
          <div className="col">
            <input
            id="firstname"
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              onChange={(e) => setPersonFirstName(e)}
            />
          </div>
          <div className="col">
            <input
            id="lastname"
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              onChange={(e) => setPersonLastName(e)}
            />
          </div>
          <div className="col-12 mt-4">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
};
