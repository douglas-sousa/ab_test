import React from 'react';
import Form from './Leads/Form';
import WhyStudy from './WhyStudyForm/WhyStudyForm';
import ReactGA from 'react-ga';
import './FormView.css';

function IndexPage(props) {
  function logConversion() {
    ReactGA.event({
      category: 'Conversão',
      action: 'Form enviado',
    });
  }

  return <div>
    <h2 id="header-FormView">QUER CONHECER<br/>O SIMPLICODE?</h2>
    <div class="openSansText" id="subtitle-FormView">Solicite agora o agendamento de uma aula experimental gratuita e<br/>sem compromisso.</div>
    <div id="form-container-FormView">
      <Form logConversion={logConversion} type={'A'} />
    </div>
    <WhyStudy />
  </div> 
}

export default IndexPage
