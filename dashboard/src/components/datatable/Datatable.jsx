import React, { useState } from 'react';
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
//import Paper from '@mui/material/Paper';
import { userRows,userColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {
  const [data,setData] = useState(userRows)


  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id !== id));
  }
 const actionColumn=[
  {
    field:"action", 
    headerName:"Action", 
    width:200, 
    renderCell: (Params) => {
      return(
      <div className='cellAction'>
    <Link to="/users/test" style={{textDecoration:"none"}}>
          <div className="viewButton">View</div>
    </Link>
          <div className="deleteButton" onClick={()=>handleDelete(Params.row.id)}>Delete</div>
    
   </div>
  );
 },
},
];

  return (
    <div className="datatable" >
    <div className="datatableTitle">
      Add New User
      <Link to="/users/new"  className="link" style={{textDecoration:"none"}}>
      Add New
      </Link>
    </div>
        <DataGrid
        className='datagrid'
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          pageSizeOptions={[9]}
          checkboxSelection
          
        />
      
    </div>
  );
};

export default Datatable;
