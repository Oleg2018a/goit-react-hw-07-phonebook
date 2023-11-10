import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://654b7c175b38a59f28ef2960.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
    
      return data;
    } catch (e) {
      console.log(rejectWithValue(e.message))
      return rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
    async newContact => {
        const { data } = await axios.post('contacts', newContact)
       
        return data
  }
);

export const deleteContact = createAsyncThunk(
    'contacts/deletContacts',
    async contactId => {
        const { data } = await axios.delete(`contacts/${contactId}`)
      
        return data
    }
)
