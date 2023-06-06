import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../utils/slices/todoSlice";
import TaskItem from "./TaskItem";
import "./style.css";
import Model from "../../custom_component/Model";

const ToDoPage = () =>{
    const todoList = useSelector(store=>store.todos);
    const dispatch = useDispatch();
    const [showModel, setShowModel] = useState(false);
    const [taskDesc, setTaskDesc] = useState("");

    const handleAddTaskSubmit = () =>{
        const task = {
            description: taskDesc,
            completed: false
        }
        dispatch(addTask(task));
        setShowModel(false);
        setTaskDesc("");
    }

    const handleAddTaskBtnClick = () =>{
        setShowModel(true);
    }

    const handleCloseModel = () =>{
        setShowModel(false);
        setTaskDesc("");
    }

    return(
        <main className="todo_container">
            <section className="cta_container">
                <button className="primary_btn" onClick={handleAddTaskBtnClick}>Add Task</button>
            </section>
            {
                todoList.length > 0 ? 
                    <section className="tasks_container">
                        {
                            todoList?.map(item=>{
                                return(
                                    <TaskItem task={item}/>
                                )
                            })
                        }
                    </section> :
                    <section className="empty_list_msg">
                        <p>List is currently empty. Please add some task to the list.</p>
                    </section>
            }
            {
                showModel && 
                    <Model handleModelClose={handleCloseModel}>
                        <div className="new_task_details">
                            <section  className="task_desc">
                                <label>Task Description</label>
                                <textarea rows="4" cols="50" id="new_task_desc" name="new_task_desc" onChange={(e)=>{setTaskDesc(e.target.value)}}></textarea>
                            </section>
                            <button onClick={handleAddTaskSubmit} className="primary_btn" disabled={taskDesc.length===0}>Submit</button>
                        </div>
                    </Model>
            }
        </main>
    )
}

export default ToDoPage;