import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli email adresi giriniz !")
    .required("Email adresi zorunlu !"),
  age: yup
    .number()
    .positive("Pozitif bit değer giriniz")
    .integer("Tam sayı giriniz")
    .required("Yaş alanı zorunlu !"),
  password: yup
    .string()
    .required("Şifre alanı zorunludur")
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
    .matches(/\d/, "Şifre en az bir rakam içermelidir")
    .matches(
      /[!+@#$%^&*(),.?":{}|<>]/,
      "Şifre en az bir özel karakter içermelidir"
    ),
  confirmPassword: yup
    .string()
    .required("Şifre tekrarı zorunlu")
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor !"),
  term: yup
    .boolean()
    .required("Lütfen kutuyu onaylayınız !")
    .oneOf([true], "Kullanıcı sözleşmesini kabul etmelisiniz !"),
});
