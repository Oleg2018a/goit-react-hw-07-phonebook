import { addContacts, deleteContact, fetchContacts } from './operation';

const { createSlice } = require('@reduxjs/toolkit');
    

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
  
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContacts.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContacts.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [addContacts.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [deleteContact.fulfilled](state, action) {
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.isLoading = false;
    },


  },
});
export const contactsReducer = contactsSlice.reducer;

