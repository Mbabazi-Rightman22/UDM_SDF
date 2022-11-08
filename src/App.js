import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <AllRoutes/>
    </BrowserRouter>
  );
}

export default App;
