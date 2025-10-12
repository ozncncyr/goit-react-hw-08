import { useSelector, useDispatch } from "react-redux";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/selectors";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    iziToast.info({
      title: "Info",
      message: "Contact deleted successfully",
    });
  };

  const numberFormat = contacts.map((contact) =>
    contact.number.replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3")
  );

  return (
    <div className={css.contactContainer}>
      <ul className={css.list}>
        {contacts.map((contact, i) => (
          <li className={css.item} key={contact.id}>
            <p className={css.text}>
              {contact.name}: {numberFormat[i]}
            </p>
            <button
              onClick={() => {
                console.log(contact.id);
                handleDelete(contact.id);
              }}
              className={css.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
