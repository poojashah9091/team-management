import React, { useState } from "react";
import "./style.css";
import { GrEdit, GrTrash } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../../utils/slices/todoSlice";
import Model from "../../../custom_component/Model";

const TaskItem = ({task}) =>{
    const [showModel, setShowModel] = useState(false);
    const [taskDesc, setTaskDesc] = useState(task.description);
    const dispatch = useDispatch();

    const handleTaskEdit = (taskId) =>{
        const task = {
            id: taskId,
            description: taskDesc
        }
        dispatch(editTask(task));
        setShowModel(false);
    }

    const handleTaskDelete = (taskId) =>{
        dispatch(deleteTask(taskId));
    }

    const handleCloseModel = () =>{
        setShowModel(false);
    }

    return(
        <>
            <section className="task_container">
                <span className="task_cta_container">
                    <span className="task_cta" onClick={()=>setShowModel(true)}><GrEdit/></span>
                    <span className="task_cta" onClick={()=>handleTaskDelete(task.id)}><GrTrash/></span>
                </span>
                <span className="task_desc">{task.description}</span>
            </section>
            {
                showModel && 
                    <Model handleModelClose={handleCloseModel}>
                        <div className="new_task_details">
                            <section  className="task_desc">
                                <label>Task Description</label>
                                <textarea rows="4" cols="50" id="new_task_desc" name="new_task_desc" onChange={(e)=>{setTaskDesc(e.target.value)}} value={taskDesc}></textarea>
                            </section>
                            <button onClick={()=>handleTaskEdit(task.id)} className="primary_btn" disabled={taskDesc.length===0}>Submit</button>
                        </div>
                    </Model>
            }
        </>
    )
}

export default TaskItem;