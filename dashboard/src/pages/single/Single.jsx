import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Charts from "../../components/chart/Chart"
import List from "../../components/table/Table"
const Single = () => {
  return (
   <div className="single">
    <Sidebar/>
    <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className='title'>Information</h1>
          <div className="item">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" className='itemImg'/>
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">example@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+923123123</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Lahore Pakistan</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Pakistan</span>
              </div>
            </div>
          </div>
          
        </div>
        <div className="right">
          <Charts aspect={3/1} title="User Spending (Last 6 Months)"/>
        </div>
      </div>
      <div className="bottom">
        <div className="title">Last Transaction</div>
        <List/>
      </div>
    </div>
   </div>
  );
};

export default Single