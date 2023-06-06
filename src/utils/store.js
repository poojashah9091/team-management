import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "./slices/memberSlice";
import teamSlice from "./slices/teamSlice";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer:{
        members: memberSlice,
        teams: teamSlice,
        todos: todoSlice
    }
});

export default store;