import React, { useCallback, useEffect } from 'react';
import RightArrow from '../../InfoComponents/HowAreTheClasses/arrow-right.png';
import LeftArrow from '../../InfoComponents/HowAreTheClasses/arrow-left.png';
import Computer from './computer.png';
import People from './people.png';
import Game from './game.png';

import "./WhyStudyForm.css"
 
const carouselFields = [
  {
    icon: {
      svg: Computer,
      text: 'Computer'
    },
    title: 'Curso online\ne ao vivo',
    text: 'Aulas online e ao vivo de 50 minutos, com um professor (a) dedicado exclusivamente para seu filho (a) durante a aula.',
  },
  {
    icon: {
      svg: People,
      text: 'People'
    },
    title: 'Respeito a\naprendizagem',
    text: 'Respeitamos o desenvolvimento da criança e do adolescente, o progresso das aulas é feito no ritmo de cada um.',
  },
  {
    icon: {
      svg: Game,
      text: 'Game'
    },
    title: 'Seu filho (a)\nno controle',
    text: 'Já na primeira aula seu filho (a) cria seu primeiro jogo. O professor é um facilitador para o aprendizado.',
  },
];

function WhyStudyForm(props) {
  //TODO: Add animation to carousel
  const [currentCarousel, setCurrentCarousel] = React.useState(0);
  const [isPC, setIsPC] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth > 760) {
      setIsPC(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        setIsPC(true);
      }
      if (window.innerWidth <= 760) {
        setIsPC(false);
      }
    });
  }, []);

  function setTitle(titleString) {
    const result = [];
    titleString.split('\n').forEach((line) => {
      result.push(line);
      result.push(<br/>);
    });
    return result;
  }

  function changeCarouselPosition(type) {
    if (type === 'add') {
      if (currentCarousel < carouselFields.length - 1) {
        setCurrentCarousel(currentCarousel + 1);
      } else {
        setCurrentCarousel(0);
      }
    }
    if (type === 'sub') {
      if (currentCarousel > 0) {
        setCurrentCarousel(currentCarousel - 1);
      } else {
        setCurrentCarousel(carouselFields.length - 1);
      }
    }
  }

  function renderIcon(icon, fontSize = '16px') {
    return <div id="innerCircleContainer-WhyStudyForm">
      <div id="number-WhyStudyForm">
      <img id="arrow-WhyStudyForm" alt={icon.text} src={icon.svg}/> 
      </div>
    </div>
  }

  function renderTitle(text) {
    return <div id="title-WhyStudyForm">{setTitle(text)}</div>;
  }
  
  function renderText(text) {
    return <div id="text-WhyStudyForm">{text}</div>
  }

  function renderCollumn(carouselField) {
    return <div className="collumn3">
      {renderIcon(carouselField.icon)}
      {renderTitle(carouselField.title)}
      {renderText(carouselField.text)}
    </div>
  }

  function pcRender() {
    return <div className="grid" style={{margin: '40px 0px 120px 0px'}}> 
      {carouselFields.map(carouselField => {
        return renderCollumn(carouselField);
      })}
    </div>
  }

  const handleLeftClick = useCallback((event) => changeCarouselPosition('sub'), [currentCarousel]);
  const handleRightClick = useCallback((event) => changeCarouselPosition('add'), [currentCarousel]);

  function mobileRender() {
    return <div id="grid-WhyStudyForm">
      {/* <img id="arrow-WhyStudyForm" alt='Seta para esquerda' src={LeftArrow} onClick={handleLeftClick}/> */}
      <div id="arrow-HowAreTheClasses" style={{backgroundImage: `url(${LeftArrow})`}} onClick={() => handleLeftClick()}></div>
      <div id="content-WhyStudyForm">
        {renderIcon(carouselFields[currentCarousel].icon)}
        {renderTitle(carouselFields[currentCarousel].title)}
        {renderText(carouselFields[currentCarousel].text)}
      </div>
      <div id="arrow-HowAreTheClasses" style={{backgroundImage: `url(${RightArrow})`}} onClick={() => handleRightClick()}></div>
      {/* <img id="arrow-WhyStudyForm" alt='Seta para direita' src={RightArrow} onClick={handleRightClick}/> */}
    </div>
  }

  function getComponentType() {
    if(isPC) {
      return [
        <h2 className='sectionTitle'>POR QUE ESTUDAR<br/>NO SIMPLICODE?</h2>,
        pcRender()
      ];
    }
    return [
      <h2 className='sectionTitle'>POR QUE ESTUDAR<br/>NO SIMPLICODE?</h2>,
      mobileRender()
    ];
  }

  return <div>
    {getComponentType()}
  </div>
  ;
}

export default WhyStudyForm;