import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from '../pages/homescreen/homescreen';
import LoginScreen from '../pages/login_screen/login_screen';

const Routing = () => {
    return (
     <>
    
      <Router>
        <Routes>
      <Route path='/' element={<LoginScreen/>}></Route>
          <Route path="/dashboard" element={<Home />}></Route>
        </Routes>
      </Router>
     </>
    );
  };
  
  export default Routing;