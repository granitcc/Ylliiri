import React, {useState} from 'react'
import Footer from '../Components/Footer';
import Landing from '../Components/Landing';
import NavBar from '../Components/NavBar';
import Sidebar from '../Components/Sidebar';

const Home = () => {
    const [isOpen,setIsOpen] =useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
}
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
<NavBar toggle={toggle}/>
<Landing/>
<Footer />
        </>
    );
};

export default Home;