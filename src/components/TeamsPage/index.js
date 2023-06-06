import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const TeamsPage = () =>{
    const tableHeader = ["Team Name", "Member Count"];
    const tableData = useSelector(store=>store.teams);
    return(
        <main className="teams_container">
            <table>
                <caption className="table_caption">Teams Details</caption>
                <thead>
                    <tr>
                        {
                            tableHeader.map(item=>{
                                return(
                                    <th key={item}>{item}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map(item=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item?.name}</td>
                                    <td>{item?.member_count}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}

export default TeamsPage;