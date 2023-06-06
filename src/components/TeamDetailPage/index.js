import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMemberTeamDetails } from "../../utils/slices/memberSlice";
import "./style.css";

const TeamDetailPage = () =>{
    const dispatch = useDispatch();
    const {teamName} = useParams();
    const teamDetails = useSelector(store=> store.members.teamDetails);
    const tableHeader = ["First Name", "Last Name", "Email"];

    useEffect(()=>{
        dispatch(getMemberTeamDetails(teamName));
    },[dispatch, teamName]);

    return(
        <main className="team_details_container">
            <table>
                <caption className="table_caption">{`${teamName} Team - ${teamDetails.length} team members`}</caption>
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
                        teamDetails?.map(item=>{
                            return(
                                <tr key={item?.id}>
                                    <td>{item?.first_name}</td>
                                    <td>{item?.last_name}</td>
                                    <td>{item?.email}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}

export default TeamDetailPage;