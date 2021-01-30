import React, {useState} from 'react'
import './App.css'
import Home from './pages'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import signin from './pages/signin';
import "./styles/main.scss";
import NavBar from './Components/NavBar';
// import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar'
import singup from './pages/singup';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {IntlProvider} from 'react-intl'
import * as locales from './languages/locale.js'
import translate from './languages/translate'
import {DataLocaleStorage} from './localestorage'
import {localecontext} from './context/localecontext'
import blogu from './pages/blogu';
import { ThemeProvider } from './ThemeProvider';

function App() {
 
  const [locale,setLocale] = useState(DataLocaleStorage.getLocale() || locales.en )

    const [isOpen,setIsOpen] =useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }


  return (
    

    <>
    
    <div className="App">
    <ThemeProvider>
      <IntlProvider locale={locale} formats={{number:"en"}} messages={translate[locale]}> 
    <localecontext.Provider value={{locale,setLocale}} >
     <Router>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
<NavBar toggle={toggle}/>
       <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/signin" component={signin} exact />
         <Route path="/singupform" component={singup} exact />
         <Route path="/blogu" component={blogu} exact />
         
       
       </Switch>

     </Router>
     </localecontext.Provider>
    </IntlProvider>
    </ThemeProvider>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default App;
