import PropTypes from "prop-types"

function ContactForm(props) {

    function handleFirstNameOnChange(e){
        props.setFirstName(e.target.value);
    }

  return (
    <>
      <div className="row py-4">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            onChange={(e) => handleFirstNameOnChange(e)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactForm;


ContactForm.propTypes = {
    setFirstName : PropTypes.func,
    setLastName : PropTypes.func
}