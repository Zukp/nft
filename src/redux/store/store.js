import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../../redux/store/cardSlice";
const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
  },
});
export default store;
