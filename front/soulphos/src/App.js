import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './screens/Main';

export default function App() {
  return (

     <Main /> 

    /* <Login /> */

   /*  
   페이지 이동 코드 우선 주석!
   <div>
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Header}/> 
          <Route path="/test" component={BannerComponent} />

        </BrowserRouter>
      </div>
    </div> */
  );
}

