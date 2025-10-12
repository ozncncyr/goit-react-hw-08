import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import styles from "./RegistrationForm.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters!")
    .required("Name is required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters!")
    .required("Password is required!"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Username
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          Email
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="span" />
        </label>
        <label>
          Password
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="span" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
