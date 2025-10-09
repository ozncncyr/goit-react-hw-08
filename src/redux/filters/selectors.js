import { createSelector } from "@reduxjs/toolkit";
import { selectFilteredContacts } from "../contacts/slice";

export const selectFilter = (state) => state.filters.search;

export const selectVisibleContacts = createSelector(
  [selectFilteredContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  }
);
