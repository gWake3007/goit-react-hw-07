import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6685222db3f57b06dd4b841f.mockapi.io/";

// export const getApi = async () => {
//   const { data } = await axios.get("contacts");
//   console.log(data);
//   return data;
// };

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const { data } = await axios.get("contacts");
  return data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const { data } = await axios.post("contacts", contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    const { data } = await axios.delete(`contacts/:${id}`);
    return data;
  }
);
