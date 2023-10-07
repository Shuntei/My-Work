import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Topnav.css';
// import ClickSidebar from '../ClickSideBar/ClickSidebar';

const Sidebar = () => {
    const menuList = [
        "服飾鞋包",
        "3C/家電",
        "人氣美食",
        "民生用品",
        "家具飾品",
        "運動休閒",
        "珠寶精品",
        "美妝保養",
        "戶外/旅行",
        "電玩遊戲",
        "各式競標"
    ]  

    return (
        <div className="menuList-item">
            <div>
                <ul className="items">
                    {menuList.map((items) => 
                        <li key={items}>
                            <Link to="/cart">{items}</Link></li>
                    )}
                </ul>
            </div>
        </div>
    )
}
const Topnav = () => {

    const [ menuSpread, setMenuSpread ] = useState(false);

    const itemList = [
        "專欄故事",
        "合作邀約",
        "企業永續"
    ];

    const infoList = [
        "抽獎活動",
        "會員登入"
    ]

  return (
    <div className="navbar">
        <div className="navbar-menu">
            <div className="menu-list">
                <button className="button" onClick={() => setMenuSpread(!menuSpread)}>
                    <div style={{margin:"auto", width:"60px", height:"10px", marginBottom: "8px", backgroundColor:"#fff"}}></div>
                    <div style={{margin:"auto", width:"60px", height:"10px", marginBottom: "8px",backgroundColor:"#fff"}}></div>
                    <div style={{margin:"auto", width:"60px", height:"10px",backgroundColor:"#fff"}}></div>
                </button>
            </div>
            <div>{menuSpread ? <Sidebar /> : null}</div>
        </div>
        <div className="navbar-item">
            <ul>
                {itemList.map((items) => 
                    <li style={{cursor:"pointer"}} key={items}>{items}</li>
                )}
            </ul>
        </div>
        <div className="navbar-CompanyName"><span>Shuntei's Store</span></div>
        <div className="navbar-info">
            <ul>
                {infoList.map((items) =>
                    items === "抽獎活動" ? 
                    <li key={items}>
                        <Link to="/content2">{items}</Link>
                    </li> : 
                    <li key={items} 
                    style={{cursor:"pointer"}} 
                    onClick={()=>alert("系統維護中，造成不便，敬請見諒。")}>{items}</li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Topnav;

