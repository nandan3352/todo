
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import {BrowserRouter,Route,Routes} from "react-router-dom";
// import NotFound from './components/NotFound';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';
// import Home from './components/Home/Home';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Routes>
//      <Route path="/login" element={<Login/>} />
//       <Route path="/app" element={<App/>} />
//       <Route path="/signup" element={<Signup/>} />
//       <Route path="/" element={<Home/>} />
//       {/* <Route path="*" element={<NotFound/>}/> */}
//     </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
