
import yllilogo from '../../assets/images/yllilogo.png';

import IconButton from '../Sidebar/IconButton';
import {SidebarRoutee} from '../Sidebar/SidebarElements';
import { FormattedMessage } from 'react-intl';



const NavBar = ({toggle}) => {

    
    



    return (
        <>
        <div className="Nav">
            <div className="space">
            <div className="NavLogo">
                <img src={yllilogo}  height="50px" />
               <p className="re"><SidebarRoutee to="/">YlliRi</SidebarRoutee> </p>
            </div>
           
            <div className="NavItems">
                <div className="NavLinks">
                   <div className="overline-from-left"><SidebarRoutee to="/"> <FormattedMessage id="NavBar.Home"/></SidebarRoutee></div> 
                   <div className="overline-from-left"> <SidebarRoutee to="/">  <FormattedMessage id="NavBar.Work" /></SidebarRoutee></div>
                   <div className="overline-from-left"><SidebarRoutee to="/blogu"> <FormattedMessage id="NavBar.UIUX" /></SidebarRoutee></div> 
                   <div className="overline-from-left" ><SidebarRoutee to="/"> <FormattedMessage id="NavBar.Resourse"/></SidebarRoutee></div> 
                   <div className="overline-from-left"><SidebarRoutee to="/"><FormattedMessage id="NavBar.News"/></SidebarRoutee></div>
                   <div  className="overline-from-left"><SidebarRoutee to="/"><FormattedMessage id= "NavBar.Contact" /></SidebarRoutee></div>
                   <div  className="overline-from-left"><SidebarRoutee to="/"><FormattedMessage id="NavBar.OurTeam" /></SidebarRoutee></div>
             
    
                </div>

            </div>
            </div>
            <div className="NavLogin">
            
                    <span className="Register">
                    <SidebarRoutee to='/singupform'><FormattedMessage id="NavBar.Register"/></SidebarRoutee>
                    
                    </span>
                    <span className="left">
                     <SidebarRoutee to="/signin">
                     <FormattedMessage id="NavBar.Login"/></SidebarRoutee>
                    </span>

                </div>
               
                <div className="MobileICon" onClick={toggle}>
               
                   <IconButton/>
         </div>
        </div>
        </>
    )
}

export default NavBar
