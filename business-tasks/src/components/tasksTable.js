import React from "react";
import {useTable,useSortBy} from 'react-table';
import './table.css';
import swal from 'sweetalert';
const axios = require('axios');

const TasksTable = () => {

    const columns = React.useMemo(() =>[
        {
            Header:'Task Id',
            Footer:'Task Id',
            accessor:'id'
        },
        {
            Header:'Task Name',
            Footer:'Task Name',
            accessor:'taskName'
    
        },
        {
            Header: 'Start ',
            Footer:'Start',
            accessor:'start'
        },
        {
            Header: 'End ',
            Footer:'End',
            accessor:'end'
        }
    ],[])
    const data =React.useMemo(() => [
        {
            "id":6523,
            "taskName":"Process extention example",
            "start":"12/03/2020",
            "end":"20/03/2020"
        },
        {
            "id":4562,
            "taskName":"Work task 4",
            "start":"12/03/2020",
            "end":"20/03/2020"
        },
        {
            "id":9856,
            "taskName":"Major Sub-Task B",
            "start":"20/03/2020",
            "end":""
        },
        {
            "id":3265,
            "taskName":"Work Task 2",
            "start":"30/03/2020",
            "end":"2/04/2020"
        }
    ],[])



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

   
    function TaskInProcess(id) {
        console.log(id);
        axios.put('http://localhost:5000/api/tasks/TaskInProcess', {
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

    function FinishedTask(id) {
        console.log(id);
        axios.put('http://localhost:5000/api/tasks/FinishedTask', {
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
    <h2><i>Users Tasks</i></h2>
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
                            <button className="Update" onClick={() => TaskInProcess()}>Task in process </button>
                            <button className="Delete" onClick={() => FinishedTask(row.values.id)} > Finished </button>
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
export default TasksTable;