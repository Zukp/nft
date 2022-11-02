import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const acceptInnerPage = createAsyncThunk(
  "applications/acceptInnerPage",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.opensea.io/api/v1/assets?format=json"
      );
      const res = await response.json();
      dispatch(Action.addItems(res));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const InnerPage = createAsyncThunk(
  "applications/InnerPage",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.opensea.io/api/v1/assets?format=json${id}`
      );
      const res = await response.json();
      dispatch(Action.addID(res));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const initialState = {
  items: [],
  itemsId: [],
  status: null,
  error: null,
};

const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      state.items = action.payload;
    },
    addID(state, action) {
      state.itemsId = action.payload;
    },
  },
  extraReducers: {
    [acceptInnerPage.pending]: (state) => {
      state.status = "pending";
    },
    [acceptInnerPage.fulfilled]: (state) => {
      state.status = "succes";
    },
    [acceptInnerPage.rejected]: (state) => {
      state.error = "reject";
    },

    [InnerPage.pending]: (state) => {
      state.status = "pending";
    },
    [InnerPage.fulfilled]: (state) => {
      state.status = "succes";
      state.error = null;
    },
    [InnerPage.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export const Action = cardSlice.actions;
export default cardSlice;
