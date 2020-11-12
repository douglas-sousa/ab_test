import React from "react"
import axios from "axios"

import './Features.css'
import '../Global.css'

import Operation from './operation.png'
import Language from './language.png'
import Content from './content.png'
import Clock from './clock.png'
import Finance from './finance.png'


const featuresList = [
    {
        title: 'Funcionamento das aulas',
        content: 'As aulas são online e individuais, ou seja, um aluno por vez. São realizadas em nossa própria plataforma de video e ocorrem semanalmente ou, às vezes, 2x na semana.',
        image: Operation
    },
    {
        title: 'Linguagem ensinada',
        content: 'Dependendo da idade e nível de conhecimento do aluno(a), ele terá aulas em Scratch ou Python. Por isso, é importante que você conheça essas linguagens.',
        image: Language
    },
    {
        title: 'Conteúdo das aulas',
        content: 'Temos um sistema de nivelamento das aulas, onde em cada nível o aluno(a) deve aprender importantes conceitos. É importante ressaltar que respeitamos o tempo de aprendizagem do aluno(a).',
        image: Content
    },
    {
        title: 'Flexibilidade de horário',
        content: 'As aulas acontecem das 9h às 19h, você pode, portanto, disponibilizar os horários que melhor se encaixam na sua agenda. Lembrando que pedimos pelo menos 10h de aulas por semana.',
        image: Clock
    },
    {
        title: 'Ganhos financeiros',
        content: 'O professor recebe R$100 por aluno, por isso, quanto mais horários você ofertar, mais alunos você terá e assim seus ganhos irão aumentar. Alunos com 2 aulas por semana duplicam o valor recebido!',
        image: Finance
    }
]

function Features() {

    return (
        <div className='container'>
            <div className='out-content'>
                <h1 className='ubuntu-title'>o que você precisa saber?</h1>
                <p>Os principais pontos que você precisa saber antes de ser professor no Simplicode estão listados aqui:</p>

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
            </div>
        </div>
    );
}

export default Features;