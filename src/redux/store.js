import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
const contactsConfig = {
  key: 'contacts',
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filter: filterReducer,
  },

  // це для того щоб не було помилки при записі в localStorage
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


// const initialState = {
//   contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = createStore(rootReducer);