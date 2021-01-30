import React, { useEffect} from 'react'
import {
SidebarContainer,

SidebarMenu,
SideBtnWrap,
SidebarRoute,
SidebarLink
}from './SidebarElements'

import Aos from 'aos';
import "aos/dist/aos.css"
import { FormattedMessage } from 'react-intl';



const Sidebar = ({isOpen,toggle}) => {
    useEffect (() => {
        Aos.init({ duration: 2500});
      
    },[])
    return (
        <SidebarContainer isOpen={isOpen} >
            {/* <Icon onClick={toggle}> */}
                {/* <IconButton onClick={toggle} /> */}
        {/* <CloseIcon  onClick={toggle}/> */}
            {/* </Icon> */}
            
            <SidebarMenu data-aos="fade-up" >
                {/* <CallToggle/> */}
               
                <SidebarLink to="/"  onClick={toggle} className="slide"><FormattedMessage id="NavBar.Home"/></SidebarLink>
                <SidebarLink to="/" onClick={toggle}  className="slide1"><FormattedMessage id="NavBar.Work"/></SidebarLink>
               
                <SidebarLink to="/blogu" onClick={toggle}  className="slide2"><FormattedMessage id="NavBar.UIUX"/></SidebarLink>
                <SidebarLink to="/" onClick={toggle}  className="slide3"><FormattedMessage id="NavBar.Resourse"/></SidebarLink>
                
                <SidebarLink to="/" onClick={toggle}  className="slide4"><FormattedMessage id="NavBar.News"/></SidebarLink>
               
                <SidebarLink to="/" onClick={toggle}  className="slide5"><FormattedMessage id="NavBar.Contact"/></SidebarLink>
               
                <SidebarLink to="/" onClick={toggle}  className="slide6"><FormattedMessage id="NavBar.OurTeam"/></SidebarLink>
               
                
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In  <i class="fas fa-sign-in-alt"></i>
                </SidebarRoute>

            </SideBtnWrap>

        </SidebarContainer>
    );
}

export default Sidebar