import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import styles from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h2>My Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
