import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { $instance } from 'helpers';

// ----- Thunks -----
export const fetchAllContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkApi) => {
    try {
      const { data } = await $instance.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const { data } = await $instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// ----- Slice -----
const initialState = {
  items: null,
  error: null,
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchAllContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ----- Add -----
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ----- Delete -----
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(i => i.id !== payload.id);
      })

      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

// ----- Selectors -----
export const selectContacts = state => state.contacts.items;
export const selectContactsError = state => state.contacts.error;
export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactsFilter = state => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;
