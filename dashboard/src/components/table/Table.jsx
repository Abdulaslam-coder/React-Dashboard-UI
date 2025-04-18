import React from 'react';
import "./table.scss";

// MUI Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Sample Data


// Component
const List = () => {
  const rows = [
    {
      id: 101,
      product: "Office Chair",
      img: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "John Smith",
      date: "2025-04-10",
      amount: 120,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 102,
      product: "Modern Lamp",
      img: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Emma Johnson",
      date: "2025-04-08",
      amount: 80,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 103,
      product: "Wooden Desk",
      img: "https://images.pexels.com/photos/5721869/pexels-photo-5721869.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "William Brown",
      date: "2025-04-07",
      amount: 150,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 104,
      product: "Comfort Sofa",
      img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Sophia Davis",
      date: "2025-04-05",
      amount: 350,
      method: "Cash on Delivery",
      status: "Rejected",
    },
    {
      id: 105,
      product: "Decorative Vase",
      img: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "James Wilson",
      date: "2025-04-02",
      amount: 40,
      method: "Online Payment",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount ($)</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow  key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell>
                <div className="cellWrapper">
                  <img src={row.img} alt={row.product} className="image" />
                  {row.product}
                </div>
              </TableCell >
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>${row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell>
                <span className={`status ${row.status}`}>{row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
