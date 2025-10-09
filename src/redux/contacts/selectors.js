import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  (state) => state.contacts.items,
  (state) => state.filters.search,
  (contacts, search) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.number.includes(search)
    );
  }
);

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContactById = (state, contactId) =>
  state.contacts.items.find((contact) => contact.id === contactId);
