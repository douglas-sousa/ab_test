import React, { useRef } from "react"

import SEO from "../../components/seo"
import Layout from "../../components/Layout/Layout";

import '../../components/Recruiting/Global.css'

import EbookPresentation from "../../components/Ebook/EbookPresentation/EbookPresentation";
import WhatWillSee from "../../components/Ebook/WhatWillSee/WhatWillSee";
import WhoWeAre from "../../components/Ebook/WhoWheAre/WhoWeAre";
import EbookForm from "../../components/Ebook/EbookForm/EbookForm";

const styleProps = {
  headerBackground: {backgroundColor: '#fff'},
  headerMobileBackground: {background: 'rgba(255, 255, 255, 0.98)'},
  headerColor: {color: '#8A75EC', borderColor: '#8A75EC'},
  headerBurgerColor: {background: '#8A75EC'},
  headerLogoTarget: 'purple',
  footerBackground: {background: '#E0E0E0'},
  footerIconsTarget: 'black',
  footerLogoTarget: 'black',
  footerColor: {color: '#333'}
}

function Gameficacao(props) {
  const description = 'Já pensou em criar um jogo e desafiar seu filho(a)? Crie um dos jogos clássicos, apresente o universo da programação para o seu filho(a) e se divirta!'
  
  return <Layout props={styleProps} target={'ebook'}>
    <SEO title="🎮 Já pensou em criar um jogo e desafiar seu filho(a)?" description={description} />
      <EbookPresentation target={'game'} />
      <EbookForm />
      <WhatWillSee target={'ebook-game'} />
      <WhoWeAre />
  </Layout>
}

export default Gameficacao
