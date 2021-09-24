import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from "./actions-types";

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter((item) => {
            return item.id !== action.payload;
          }),
        },
      };
    case CHANGE_FILTER:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: action.payload,
        },
      };
    default:
      return state;
  }
};
