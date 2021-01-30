import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:9999;
    width:80%;
    height:100%;
   border-right:2px solid darkmagenta;
   box-shadow: 1px 0px 14px 2px darkmagenta;
   background-color:#0E0E12;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition:0.45s ease-in-out;
    opacity:${({isOpen}) =>(isOpen ? '99%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' :'-100%')};
`;
export const CloseIcon = styled(FaTimes)`
    color:#fff;
`
export const Icon =styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`
export const SidebarWrapper =styled.div`
    color:#fff;
`;

export const SidebarMenu = styled.div`
    display:grid;
    position:relative;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;
@media screen and (max-width:420px){
    grid-template-rows:repeat(6,60px);
}
@media screen and (max-width:360px){
    grid-template-rows:repeat(6,50px);
}
`;

export const SidebarLink =styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2.0rem;
    margin-top:2rem;
    font-weight:400;
    text-decoration:none;
    list-style:none;
    text-decoration:none;
    padding-top:0.2rem;
   
    color:#788ca0;
    cursor:pointer;
    /* animation: 1.2s ease-in 1s 1 reverse both running slidein;
    @keyframes slidein {
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
} */
    @media screen and (max-width:415px){
    grid-template-rows:repeat(6,20px);
    font-size:1.2rem;
}
`

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
    padding-bottom:3rem;
    
  
    
`
export const SidebarRoute =styled(LinkR)`
    border-radius:20px;
    white-space:nowrap;
    padding:16px 64px;
   
    font-size:16px;
    outline:none;
    border:1.5px solid white;
    background: transparent;
    align-items:center;
    font-size:1.2rem;
    font-weight:bold;
    margin-bottom:1rem;
    cursor:pointer;
    color:white;
    border-top:2px solid darkmagenta;
    border-left:none;
    border-right:none;
    border-bottom:2px solid darkmagenta;
    transition:all 0.3s ease-in-out; 
    text-decoration:none;
    
&:hover {
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`
export const SidebarRoutee =styled(LinkR)`
 
&:hover {
    cursor:pointer;
  
}
`