import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// 리덕스랑 같은 history
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

import Main from './screens/Main'
import Login from './screens/Login';

// 기업소개 
import CompanyIntroduction from './screens/CompanyIntroduction';

// 지표 
import PerformanceIndicator from './screens/PerformanceIndicator'
import QualityIndicator from './screens/QualityIndicator'

// 사용법 
import Use from './screens/Use'

// 마이페이지
import MypageVerify from './screens/MypageVerify';
import Mypage from './screens/Mypage';
import MypageModify from './screens/MypageModify';


export default function App() {
  return (
    <React.Fragment>
   
     <Router>
     
        <Routes>
        
        
          <Route path="/" exact={true} element={<Main/>}/> 
          <Route path="/login" element={<Login/>}/> 

          <Route path="/companyintroduction" element={<CompanyIntroduction/>}/>
          <Route path="/performanceIndicator" element={<PerformanceIndicator/>}/>
          <Route path="/qualityIndicator" element={<QualityIndicator/>}/>

          <Route path="/use" element={<Use/>}/>

          <Route path="/mypageverify" element={<MypageVerify/>}/>
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="/mypagemodify" element={<MypageModify/>}/>
          
          
        </Routes>
        
        </Router>
    
    </React.Fragment>
      
    
  );
}

