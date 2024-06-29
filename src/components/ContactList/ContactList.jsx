import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchInput = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filterContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
