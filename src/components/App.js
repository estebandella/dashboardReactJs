// componetne sin stado

import React from "react";
import SlideBar from './SlideBar';
import ContentWrapper from './ContentWrapper';

import '../assets/css/app.css'; //importo el css dado en el dashboard

function App() {
  
  return(
    <React.Fragment>

      <div id="wrapper">

        <SlideBar />

        <ContentWrapper />

      </div>




    </React.Fragment>

  )
}

export default App;