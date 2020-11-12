import React, {useState, useEffect} from 'react';
import Logo from '../../../images/logo.svg';
import LogoBlack from '../../../images/logo-black.svg'
import LogoPurple from '../../../images/logo-purple.svg'
import './Header.css';


function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPC, setIsPC] = useState(false)

  console.log(props)

  const sprops = props || {}

  const styleProps = {
    headerBackground: sprops.headerBackground || {},
    headerMobileBackground: {...sprops.headerMobileBackground, transform: 'translateX(0%)'} || {transform: 'translateX(0%)'},
    headerColor: sprops.headerColor || {},
    headerBurgerColor: sprops.headerBurgerColor || {},
    headerLogoTarget: sprops.headerLogoTarget || null,
  }
  
  function getLogo(key) {
    switch (key) {
      case 'black':
        return LogoBlack
      
      case 'purple':
        return LogoPurple

      default:
        return Logo
    }
  }

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setIsPC(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) {
        setIsPC(true);
      }
      if (window.innerWidth <= 1000) {
        setIsPC(false);
      }
    });
  }, []);

  function redirect() {
    const uri = '/' + document.location.search;
    window.location.replace(uri); 
  }

  function redirectSchedule() {
    const uri = '/#subs-container' + document.location.search;
    window.location.replace(uri); 
  }

  function redirectCourses() {
    const uri = '/#background-OurCourses' + document.location.search;
    window.location.replace(uri); 
  }

  function redirectForm() {
    const uri = '/form' + document.location.search;
    window.location.replace(uri); 
  }

  const handleClickMenu = () => {(mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true))}
  

  function renderPc() {
    return (
      <div className='options-container'>
        <div className='nav-item' onClick={() => {redirectCourses()}} style={styleProps.headerColor}>Nossos cursos</div>
        <div className='nav-item' onClick={() => {redirectSchedule()}} style={styleProps.headerColor}>Assinatura</div> 
        <div className='nav-item' ><a style={styleProps.headerColor} target='_blank' href='https://blog.simplicode.com.br/'>Blog</a></div>
        <div className='nav-button' onClick={() => {redirectForm()}} style={styleProps.headerColor}>AGENDAR AULA</div>
      </div>
    );
  }

  function renderMobile() {
    return (
      <div className={mobileMenuOpen ? "menu-btn open" : 'menu-btn'} onClick={() => handleClickMenu()}>
        <div className='menu-btn__burger_before' style={styleProps.headerBurgerColor}></div>
        <div className='menu-btn__burger' style={styleProps.headerBurgerColor}></div>
        <div className='menu-btn__burger_after' style={styleProps.headerBurgerColor}></div>
      </div>
    )
  }

  function renderMobileMenu() {
    return <div className='mobile-menu' style={mobileMenuOpen ? styleProps.headerMobileBackground : {}}>
      <div className='options-container-mobile'>
        <div style={styleProps.headerColor} className='nav-item' onClick={() => {redirectCourses()
                                                  setMobileMenuOpen(false)}} >Nossos cursos</div>
        <div style={styleProps.headerColor} className='nav-item' onClick={() => {redirectSchedule()
                                                  setMobileMenuOpen(false)}} >Assinatura</div> 
        <div className='nav-item' ><a style={styleProps.headerColor} target='_blank' href='https://blog.simplicode.com.br/'>Blog</a></div>
        <div style={styleProps.headerColor} className='nav-button' onClick={() => {redirectForm()
                                                    setMobileMenuOpen(false)}}>AGENDAR AULA</div>
      </div>
    </div>
  }

  return <>
    {!isPC ? renderMobileMenu() : undefined}
    <div id="background-Header" style={styleProps.headerBackground}>
      <div className="header-container">
        <div className="logo" style={{display: 'flex'}}>
          <img alt='Logo' src={getLogo(styleProps.headerLogoTarget)} onClick={() => { redirect(); }} /> 
        </div>
        {isPC ? renderPc() : renderMobile()}
      </div>
    </div>
  </>;
}

export default Header;