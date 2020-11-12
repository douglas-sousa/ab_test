import React from 'react';
import Logo from '../../../images/logo.svg';
import LogoBlack from '../../../images/logo-black.svg'

import FB from '../../../images/fb.svg';
import Instagram from '../../../images/instagram.svg';
import Whatsapp from '../../../images/whatsapp.svg';

import FBBlack from '../../../images/fb-black.svg';
import InstagramBlack from '../../../images/instagram-black.svg';
import WhatsappBlack from '../../../images/whatsapp-black.svg';

import './Footer.scss';

function Footer(props) {

  const sprops = props || {};

  const styleProps = {
    footerIconsTarget: sprops.footerIconsTarget || null,
    footerBackground: sprops.footerBackground || {},
    footerLogoTarget: sprops.footerLogoTarget || null,
    footerColor: sprops.footerColor || {}
  }

  function getInstaIcon(key) {
    switch (key) {
      case 'black':
        return InstagramBlack

      default:
        return Instagram
    }
  }

  function getWhatsappIcon(key) {
    switch (key) {
      case 'black':
        return WhatsappBlack
    
      default:
        return Whatsapp
    }
  }

  function getFBIcon(key) {
    switch (key) {
      case 'black':
        return FBBlack
    
      default:
        return FB
    }
  }

  function getLogo(key) {
    switch (key) {
      case 'black':
        return LogoBlack
        
      default:
        return Logo
    }
  }

  function renderIcons() {
    return <div className="grid" style={{display: 'inline-flex'}}>
      <div className="collumn3">
        <a target="_blank" href="https://www.instagram.com/simplicode/"> 
          <img alt='Instagram' src={getInstaIcon(styleProps.footerIconsTarget)}/>
        </a>
      </div>
      <div className="collumn3">
        <a target="_blank" href="https://www.facebook.com/simplicode.programacao">
          <img alt='Facebook' src={getFBIcon(styleProps.footerIconsTarget)}/> 
        </a>
      </div>
      <div className="collumn3">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=556131810641&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Simplicode!"> 
          <img alt='Whatsapp' src={getWhatsappIcon(styleProps.footerIconsTarget)}/>
        </a>
      </div>
    </div>
  }

  function redirect() {
    const uri = '/' + document.location.search;
    window.location.replace(uri);
  }

  return <div id="background-Footer" style={styleProps.footerBackground}>
    <div className="grid">
      <div className="collumn2" id="logo-Footer">
        <img alt='Logo completa' src={getLogo(styleProps.footerLogoTarget)} onClick={() => { redirect(); }} id={'logo-'+ styleProps.footerLogoTarget}/>
      </div>
      <div className="collumn2">
        {renderIcons()}
      </div>
    </div>
    <div className="grid" id="links">
      <div className="collumn2">
        <a target="_blank" href="https://blog.simplicode.com.br" style={styleProps.footerColor}> 
            Conheça nosso blog
        </a>
      </div>
      <div className="collumn2">
        <a target="_blank" href="https://simplicode.com.br/recrutamento" style={styleProps.footerColor}> 
            Seja um professor
        </a>
      </div>
    </div>
    <div id="line-Footer" style={{background: styleProps.footerColor.color}}/>
    <div id="rights-Footer" style={styleProps.footerColor}>Desenvolvido pela Colmeia Tecnologia LTDA. Todos os direitos reservados a Colmeia Tecnologia LTDA.</div>
  </div>;
}

export default Footer;