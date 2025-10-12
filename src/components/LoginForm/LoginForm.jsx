import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters!")
    .required("Password is required!"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form>
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
