import React from 'react'
import "./widget.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
const Widget = ({type}) => {
  const amount=100;
  const diff=20;
  let data;
  switch(type) {
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:<PersonOutlineOutlinedIcon className='icon'
        style={{
          color:"crimson"
          ,backgroundColor:"rgba(255, 0, 0, 0.2)",
        }}
        />,
  
      };
      break;
      case "order":
      data={
        title:"ORDERS",
        isMoney:false,
        link:"See all orders",
        icon:<ViewStreamOutlinedIcon className='icon' 
        style={{
          color:"goldenrod"
          ,backgroundColor:"rgba(218, 165, 32, 0.2)",
        }}
        />,
  
      };
      break;
      case "earning":
      data={
        title:"EARNINGS",
        isMoney:true,
        link:"View net Earnings",
        icon:<AttachMoneyOutlinedIcon className='icon'
        style={{
          color:"green",
          backgroundColor:"rgba(0, 128, 0, 0.2)",

        }}
        />,
  
      };
      break;
      case "balance":
      data={
        title:"BALANCES",
        isMoney:true,
        link:"See Details",
        icon:<AccountBalanceOutlinedIcon className='icon'
        style={{
          color:"purple",
          backgroundColor:"rgba(128, 0, 128, 0.2)",
        }}
        />,
  
      };
      break;
      default:
      break;
  }


  return (
    <div className="widget">
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"} {amount} </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon/>
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget