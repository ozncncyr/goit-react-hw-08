import { selectFilteredContacts } from "./reducers/contactsSlice";

export const selectContacts = selectFilteredContacts;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContactById = (state, contactId) =>
  state.contacts.items.find((contact) => contact.id === contactId);
