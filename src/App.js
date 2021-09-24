import React from "react";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList.js";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch, connect } from "react-redux";
import { addContact, deleteContact, changeFilter } from "./redux/actions";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  //const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  //console.log("filter=", filter, "contacts=", contacts);

  const onAddContact = (name, number) => {
    const selectedContact = contacts.filter((contact) => {
      return contact.name === name;
    });
    if (selectedContact.length > 0) {
      alert(name + " is already in contacts");
    } else {
      dispatch(addContact({ id: uuidv4(), name, number }));
    }
  };

  const onChangeFilter = (filter) => {
    dispatch(changeFilter(filter));
  };

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={onChangeFilter} />
      <ContactList onDelete={onDeleteContact} />
    </div>
  );
}

/*contacts={contacts}
  filter={filter}*/

export default connect()(App);
