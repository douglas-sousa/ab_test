import React from "react"

import './WhatWillSee.css'

import Keyboard from './keyboard.png'
import Girl from './girl.png'
import Notebook from './notebook.png'
import Think from './think.png'
import Family from './family.png'
import Scrath from './scratch.png'
import Char from './char.png'
import Cube from './cube.png'
import Hammer from './hammer.png'

const dataEbook = {
    sectionTitle: 'o que você verá no e-book',
    buttonText: 'QUERO MEU EBOOK',
}

const dataCourse = {
    sectionTitle: 'o que você verá no mini-curso gratuito',
    buttonText: 'QUERO TER ACESSO AO CURSO',
}

const featuresListProfissoesEbook = [
    {
        title: 'Qual será a principal área de atuação?',
        content: 'Como esperado, a maior parte está ligada diretamente com a área de Tecnologia da Informação. Devido ao maior envolvimento das empresas com os ambientes virtuais.',
        image: Keyboard
    },
    {
        title: 'Por que meu filho deve aprender a programar?',
        content: 'Aprender programação desde cedo ajuda na alfabetização digital, desenvolve o raciocínio lógico, o pensamento abstrato, a criatividade e a lidar e resolver problemas.',
        image: Girl
    },
    {
        title: 'E o meu filho(a) vai gostar?',
        content: 'A prática da programação gera resultados empolgantes! Programadores, independente da idade, criam seus próprios projetos, como jogos baseados em sua próprias ideias!',
        image: Notebook
    },
]

const featuresListGameficacaoEbook = [
    {
        title: 'Construa o próprio jogo de vocês',
        content: 'Vamos ensinar como criar um jogo simples, porém um clássico dos videogames. Você poderá fazer isso junto do seu filho(a). Ensiná-lo um pouco sobre o assunto e ainda desafiá-lo ao final!',
        image: Family
    },
    {
        title: 'Introdução à programação',
        content: 'Ao ensinar como criar o próprio jogo, iremos introduzir importantes conceitos do universo da programação. Um ótimo começo para aqueles que querem entender um pouco mais sobre essa linguagem.',
        image: Think
    },
    {
        title: 'Use a plataforma criada pelo MIT',
        content: 'O jogo que vamos construir será desenvolvido na plataforma desenvolvida pelo MIT, o Scratch. É uma plataforma voltado para o ensino da programação de maneira lúdica, ideal para crianças.',
        image: Scrath
    },
]

const featuresListMiniGameCourse = [
    {
        title: 'Como começar do zero um jogo no Roblox',
        content: 'Um passo a passo para aprender a criar seu jogo do zero, mesmo que seu filho não saiba nada de programação, será possível criar o jogo.',
        image: Cube
    },
    {
        title: 'Construir um jogo completo',
        content: 'Seu filho  vai terminar o curso construindo seu próprio jogo, do início ao fim, e deixando ele disponível para outras crianças jogarem.',
        image: Hammer
    },
    {
        title: 'Por que Roblox?',
        content: 'Hoje o Roblox é um dos principais jogos do mundo, permitindo também o aprendizado básico de programação, uma habilidade essencial no mundo de hoje, sendo considerado o novo inglês.',
        image: Char
    },
]

function Features(props) {
    var data = {}

    function verifyTarget(target) {
        if(target === 'ebook-game') {
            data = dataEbook;
            return featuresListGameficacaoEbook;
        } else if(target === 'ebook-profission') {
            data = dataEbook;
            return featuresListProfissoesEbook;
        } else if(target === 'roblox') {
            data = dataCourse;
            return featuresListMiniGameCourse;
        } else {
            return
        }
    }

    var featuresList = verifyTarget(props.target);

    return (
        <div className='container'>
            <div className='out-content'>
                <h1 className='ubuntu-title' style={{marginBottom: '8vh'}}>{data.sectionTitle}</h1>

                {featuresList.map((item => {
                    return(
                        <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
                            <div className='icon'>
                                <img src={item.image} alt={item.title} style={{}}/>
                            </div>
                            <div className='icon-text'>
                                <h2 className='ubuntuText'>{item.title}</h2>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    );
                }))}
                 <a id='buttonText' href='#Ebook-Card-Form'>{data.buttonText}</a>
            </div>
        </div>
    );
}

export default Features;