import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

function formatNumber(number) {
  const digits = number.replace(/\D/g, "");
  if (digits.length === 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 7)}`;
  }
  return number;
}

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.contact}>
      <span>
        {contact.name}: {formatNumber(contact.number)}
      </span>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
}
