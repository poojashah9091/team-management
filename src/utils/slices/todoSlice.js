import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const todoSlice = createSlice({
    name:"todoSlice",
    initialState: [],
    reducers: {
        addTask: (state, action)=>{
            ++id;
            state.push({...action.payload, id});
        },
        editTask: (state, action)=>{
            const taskId = state.findIndex(item=>item.id===action.payload.id);
            state[taskId] = action.payload;
        },
        deleteTask: (state, action)=>{
            const taskId = state.findIndex(item=>item.id===action.payload);
            state.splice(taskId, 1);
        }
    }
});

export default todoSlice.reducer;
export const {addTask, editTask, deleteTask} = todoSlice.actions;