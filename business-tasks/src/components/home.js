import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();

    const Employees = () => {
        let path = `/employees`;
        navigate(path)
    } 
    const TasksTable = () => {
        let path = `/tasksTable`;
        navigate(path)
    } 
return(
    <div>
    <br/><br/>
    <button className="NewEmployee" onClick={Employees}> Employee Table </button>
    <br/><br/>
    <button className="NewEmployee" onClick={TasksTable}> Tasks Table </button>

    </div>
)

}

export default Home ;