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

function Profissoes(props) {
  const description = 'Você sabe quais serão as profissões do futuro? Descubra quais serão essas profissões e como aprender programação hoje poderá ajudar seu filho(a) no futuro!'
  
  return <Layout props={styleProps}>
    <SEO title="💼 Quais serão as profissões do futuro?" description={description} />
      <EbookPresentation />
      <EbookForm />
      <WhatWillSee target='ebook-profission'/>
      <WhoWeAre />
  </Layout>
}

export default Profissoes
