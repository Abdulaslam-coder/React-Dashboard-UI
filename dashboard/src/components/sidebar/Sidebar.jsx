import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
          
            <span className="logo">Comforty.pk</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">
                    LISTS
                </p>
                <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <Inventory2OutlinedIcon className='icon'/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <ViewStreamOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsOutlinedIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MonitorWeightOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon'/>
                    <span>Logs </span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">
                    USER
                </p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className='icon'/> 
                    <span>Logout</span>
                </li>
                    

            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch(({type:"LIGHT"}))}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
          
        </div>
    </div>
  )
}

export default Sidebar