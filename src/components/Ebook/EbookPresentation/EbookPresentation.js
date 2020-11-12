import React from "react"

import './EbookPresentation.css'

import PresentationImageProfissoes from './presentation.png'
import PresentationImageGameficacao from './presentation-game.png'

const data_Profissoes = {
    title: 'Você sabe quais serão as profissões do futuro?',
    subtitle: 'Baixe nosso E-book e descubra quais serão essas profissões e como aprender programação hoje poderá ajudar seu filho(a) no futuro!',
    image: PresentationImageProfissoes
}

const data_Gameficacao = {
    title: 'Já pensou em criar um jogo e desafiar seu filho(a)?',
    subtitle: 'Crie um dos jogos clássicos, apresente o universo da programação para o seu filho(a) e se divirta!',
    image: PresentationImageGameficacao
}

function Presentation(props) {
    var data = props.target === 'game' ? data_Gameficacao : data_Profissoes;
    return (
        <div className='container'>
            <div id={props.target === 'game' ? 'margin-14' : 'margin-7'} className='contentContainer-Ebook wrap'>
                <div className='flex-item' style={{ }}>
                    <h1 className='titleText' style={props.target === 'game' ? {fontFamily: 'Raleway', fontWeight: '900'} : {}}>{data.title}</h1>
                    <p className='secondaryText'>
                    {data.subtitle}
                    </p>
                </div>
                <div className='ebook-image-flex'>
                    <img id='ebook-image' style={props.target === 'game' ? {transform: 'scale(0.9)'}: {}} src={data.image} alt='foto ilustrando e-book'/>
                </div>
            </div>
        </div>
    )
}

export default Presentation

//<img src={Frame} alt=""/>
