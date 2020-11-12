import React from 'react';
import Form from './Form';
import ReactGA from 'react-ga';
import './EbookForm.css'

function IndexPage(props) {
  function logConversion() {
    ReactGA.event({
      category: 'Conversão',
      action: 'Form enviado',
    });
  }

  return <div className='container'>
    <div id="Ebook-Form-Container" style={{marginBottom: '14vh'}}>
      <Form logConversion={logConversion} type={'A'} />
    </div>
  </div> 
}

export default IndexPage
