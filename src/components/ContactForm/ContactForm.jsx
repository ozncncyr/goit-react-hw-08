import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .min(2, "Name must be at least 2 characters!")
    .max(36, "Name must be at most 36 characters!")
    .matches(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\s-]+$/,
      "Name can only contain letters, numbers, spaces, and hyphens!"
    ),
  number: Yup.string()
    .required("Phone number is required!")
    .length(7, "Phone number must be exactly 7 digits!")
    .matches(/^\d{7}$/, "Phone number must be exactly 7 digits!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" component="span" />
        <Field name="number" placeholder="Phone number (7 digits)" />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
}
