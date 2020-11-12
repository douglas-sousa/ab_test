import React from "react"

import './WhoWeAre.css'

import Ian from './ian.png'


function WhoWeAre() {
  return (
        <div className='container'>
            <div id='who-we-are-container' className='contentContainer-Ebook wrap'>
                <div className='flex-item' style={{marginRight: '2vh'}}>
                <h1 className='ubuntu-title' style={{}}>Quem somos</h1>
                    <p id='textWhoWeAre'>
                    Somos o Simplicode, uma plataforma online que ensina crianças 
                    e jovens entre 7 e 18 anos a programar. Nossa missão é dar às 
                    pessoas o poder de criar seu futuro através da programação.
                    </p>
                    <a id='WhoWeAreButton' target='_blank' href='https://www.simplicode.com.br'>SAIBA MAIS SOBRE NÓS</a>
                </div>
                <div className='flex-item'>
                    <img id='ian-image' src={Ian} alt='Foto ian'/>
                </div>
            </div>
        </div>
  )
}

export default WhoWeAre
