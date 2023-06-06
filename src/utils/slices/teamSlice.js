import { createSlice } from "@reduxjs/toolkit";
import teamDetails from "../../data/teams.json";

const teamSlice = createSlice({
    name: "teamSlice",
    initialState: teamDetails.teams,
    reducers: {}
});

export default teamSlice.reducer;