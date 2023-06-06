import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

const MembersPage = () =>{
    const tableHeader = ["First Name", "Last Name", "Email", "Team Name"];
    const tableData = useSelector(store=> store.members.memberData);

    return(
        <main className="members_container">
            <table>
                <caption className="table_caption">Members Details</caption>
                <thead>
                    <tr>
                        {
                            tableHeader?.map(item=>{
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
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to={`./${item.team.name}`} className="team_details_cta">{item.team.name}</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}

export default MembersPage;