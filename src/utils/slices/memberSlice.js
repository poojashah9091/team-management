import { createSlice } from "@reduxjs/toolkit";
import memberDetails from "../../data/members.json";

const memberSlice = createSlice({
    name: "memberSlice",
    initialState: {
        memberData: memberDetails.members,
        teamDetails: []
    },
    reducers: {
        getMemberTeamDetails: (state, action)=>{
            state.teamDetails = state.memberData.filter(item=>item.team.name===action.payload);
        }
    }
});

export default memberSlice.reducer;
export const {getMemberTeamDetails} = memberSlice.actions;