import React, {useMemo} from "react";
import {useTable,useSortBy} from 'react-table';
import MOCKDATA from './MOCK_DATA.json';
import setData  from './employeData';
import './table.css';
import { useNavigate } from "react-router-dom";
import deleteEmployee from './deleteTest'
import swal from 'sweetalert';
const axios = require('axios');


// import { Checkbox } from "@material-ui/core";


const Employees = () => {

    const columns = useMemo(() => setData,[])
    const data = useMemo(() => MOCKDATA, [])
    const navigate = useNavigate();



    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
        } = useTable({
        columns,
        data
    },
    useSortBy
    )
    
    const firstPageRows= rows.slice(0,10)

    const NewEmployee = () => {
        let path = `/addUser`;
        navigate(path)
    } 
    function UpdateEmployee(id) {
        console.log(id);
        axios.put('http://localhost:5000/api/tasks/updateUser', {
            empId: id,
        }).then((res) => {
            

        }).catch((err) => {
            if (err.response && err.response.data && err.response.data.errorMessage) {
              swal({
                text: err.response.data.errorMessage,
                icon: "error",
                type: "error"
              });
            }
        });
    } 

    function DeleteEmployee(id) {
        console.log(id);
        axios.post('http://localhost:5000/api/tasks/deleteUser', {
            empId: id,
        }).then((res) => {
            

        }).catch((err) => {
            if (err.response && err.response.data && err.response.data.errorMessage) {
              swal({
                text: err.response.data.errorMessage,
                icon: "error",
                type: "error"
              });
            }
        });
    } 

return(
    <>
    <h2><i>List Of Users</i></h2>
     <br/><br/>
    <button className="NewEmployee" onClick={NewEmployee}> Add New Employee </button>
    <br/><br/>
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render('Header')}
                            <span>
                                {column.isSorted ? (column.isSortedDesc ? '▼':'▲'):''}
                            </span>
                            </th>
                        ))
                    }

                </tr>
            ))}
            
            
        </thead> 
       
        <tbody {...getTableBodyProps()}>
            {
                firstPageRows.map((row)=>{
                    prepareRow(row);
                   // console.log(row);
                    return(
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell)=>{
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}  
                        <th>
                            <button className="Update" onClick={() => UpdateEmployee()}> Update </button>
                            <button className="Delete" onClick={() => DeleteEmployee(row.values.id)} > Delete </button>
                        </th>
               
                    </tr>
                    )
                })
            }
                
        </tbody>

    </table>
    </>
)
}
export default Employees;