import { useFormik } from "formik";
import { registerFormSchemas } from "../schemas/RegisterFormSchemas";

const RegisterForm = () => {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, handleChange, handleSubmit, resetForm, errors } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: false,
    },
    validationSchema: registerFormSchemas,
    onSubmit: submit,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email giriniz"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="errors">{errors.email}</p>}
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
          {errors.age && <p className="errors">{errors.age}</p>}
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
          {errors.password && <p className="errors">{errors.password}</p>}
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
          {errors.confirmPassword && (
            <p className="errors">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="term">
          <input
            type="checkbox"
            id="term"
            name="term"
            checked={values.term}
            onChange={handleChange}
          />
          <label htmlFor="term">Kullanıcı sözleşmesini kabul ediyorum</label>
        </div>
        {errors.term && <div className="errors">{errors.term}</div>}
        <div className="button">
          <button type="submit" className="button-item">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
