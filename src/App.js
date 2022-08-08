import './App.css';

import { Routes, Route,BrowserRouter } from "react-router-dom";
import Auth from "./source/pages/AuthPage"
import {Registration} from "./source/pages/RegistrationPage"
import ListPage from "./source/pages/ListPage"
import ErrorPage from './source/pages/ErrorPage';
import { store } from "./source/stores/AuthStore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/listPage" element={<ListPage/>}/>
            <Route path='/' element={<Auth/>}/> 
            <Route path="/registration" element={<Registration />}/>
            <Route path="/errorPage" element={<ErrorPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
