import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  phone: Yup.string().required("Phone number is required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" component="span" />
        <Field name="phone" placeholder="Phone number" />
        <ErrorMessage name="phone" component="span" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
}
