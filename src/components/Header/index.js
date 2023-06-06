import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import './style.css';

const Header = () =>{

    const [showSideNavigation, setShowSideNavigation] = useState(false);

    useEffect(()=>{
       const navElem = document.getElementById("nav_container");
       if(showSideNavigation){
            navElem?.classList.add("responsive_menu");
       }
       else{
            navElem?.classList.remove("responsive_menu");
       }
    },[showSideNavigation])

    const handleMenuClick = () =>{
        setShowSideNavigation(true);
    }
    const handleCloseMenu = () =>{
        setShowSideNavigation(false);
    }

    return(
        <header className="header_container">
            <section className="logo">
                <img src={logo} alt="logo"/>
            </section>
            <nav className="nav_container" id="nav_container">
                <Link to="/members" className="link_btn">Members Page</Link>
                <Link to="/teams" className="link_btn">Teams Page</Link>
                <Link to="/todos" className="link_btn">To-Do List Page</Link>
                <span className="menu_icon" onClick={handleCloseMenu}>
                    <AiOutlineClose color='#fff'/>
                </span>
            </nav>
            <section onClick={handleMenuClick} className="menu_icon">
                <AiOutlineMenu color='#fff'/>
            </section>
        </header>
    )
}

export default Header;