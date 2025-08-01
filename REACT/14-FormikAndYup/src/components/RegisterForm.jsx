import { useFormik } from "formik";

const RegisterForm = () => {
  const { values, handleChange, handleSubmit, resetForm, errors } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
  });
  return (
    <div>
      <form>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email giriniz"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="age">
          <label htmlFor="age">Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı giriniz"
            value={values.age}
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi giriniz"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="confirmPassword">
          <label htmlFor="confirmPassword">Şifre Tekrarı</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifrenizi tekrar giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="term">
          <input
            type="checkbox"
            id="term"
            value={values.term}
            onChange={handleChange}
          />
          <label htmlFor="term">Kullanıcı sözleşmesini kabul ediyorum</label>
        </div>
        <div className="button">
          <button className="button-item">Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
