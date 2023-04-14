 
import Login from 'Pages/Auth/Register';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
 
import { route } from './Routes/routes';
import { Toaster } from 'react-hot-toast';
 
function App() {
   
  return (
    <div className="App">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <RouterProvider router={route}></RouterProvider>
       
    </div>
  );
}

export default App;
