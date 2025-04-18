export const userColumns =[
    {field:"id" , headerName: "ID", width:70},
    { field:"user", headerName:"User", width:230, renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avator"/>
                {params.row.username}
            </div>
        );
    },
  },
  {
  field: "email",
  headerName: "Email",
  width: 230,
  },
  {
    field: "age",
    headerName: "age",
    width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell:(params) =>{
        return(
          <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
      }
    },
];
export const userRows = [
    {
      id: 1,
      username: "john_doe",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "active",
      email: "john.doe@example.com",
      age: 28,
    },
    {
      id: 2,
      username: "jane_smith",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "pending",
      email: "jane.smith@example.com",
      age: 32,
    },
    {
      id: 3,
      username: "mike_jones",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "passive",
      email: "mike.jones@example.com",
      age: 40,
    },
    {
      id: 4,
      username: "lisa_ray",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "active",
      email: "lisa.ray@example.com",
      age: 25,
    },
    {
      id: 5,
      username: "lisa_ray",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "active",
      email: "lisa.ray@example.com",
      age: 25,
    },
    {
      id: 6,
      username: "lisa_ray",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "active",
      email: "lisa.ray@example.com",
      age: 25,
    },
    {
      id: 7,
      username: "lisa_ray",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "active",
      email: "lisa.ray@example.com",
      age: 25,
    },
    {
      id: 8,
      username: "lisa_ray",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "active",
      email: "lisa.ray@example.com",
      age: 25,
    },
    {
      id: 9,
      username: "lisa_ray",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      status: "active",
      email: "lisa.ray@example.com",
      age: 25,
    }
  ];
  